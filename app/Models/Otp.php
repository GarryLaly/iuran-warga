<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Otp extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'otp',
        'phone',
        'status',
        'expired_at',
        'max_request_at',
        'count_request',
        'max_request',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'expired_at' => 'datetime',
            'count_request' => 'integer',
            'max_request' => 'integer',
        ];
    }

    /**
     * Check if OTP is expired
     */
    public function isExpired(): bool
    {
        return now()->gt($this->expired_at);
    }

    /**
     * Check if OTP has reached max request limit
     */
    public function hasReachedMaxRequest(): bool
    {
        // If count_request hasn't reached max_request, return false
        if ($this->count_request < $this->max_request) {
            return false;
        }

        // If max_request_at is not set, set it now
        if (!$this->max_request_at) {
            $this->update([
                'max_request_at' => now()->addMinutes(30) // Block for 30 minutes
            ]);
            return true;
        }

        // If max_request_at is set and hasn't passed yet, return true (blocked)
        if (now()->lt($this->max_request_at)) {
            return true;
        }

        // If max_request_at has passed, reset counters and return false
        $this->update([
            'count_request' => 0,
            'max_request_at' => null
        ]);
        
        return false;
    }

    /**
     * Check if OTP is still valid/new
     */
    public function isValid(): bool
    {
        return $this->status === 'new' && !$this->isExpired();
    }

    /**
     * Increment request count
     */
    public function incrementRequest(): void
    {
        $this->increment('count_request');
    }

    /**
     * Mark OTP as used
     */
    public function markAsUsed(): void
    {
        $this->update(['status' => 'used']);
    }
}
