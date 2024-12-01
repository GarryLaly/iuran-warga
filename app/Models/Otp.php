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
        'count_request',
        'max_request'
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
        return $this->count_request >= $this->max_request;
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
