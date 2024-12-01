<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Payment extends Model
{
    protected $fillable = [
        'user_id',
        'qr_payload',
        'total_amount',
        'status',
        'notes',
        'request_at',
        'paid_at',
        'expired_at'
    ];

    protected $casts = [
        'request_at' => 'datetime',
        'paid_at' => 'datetime',
        'expired_at' => 'datetime'
    ];

    /**
     * Get the user that owns the payment
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the wallet mutations for the payment
     */
    public function walletMutations(): HasMany
    {
        return $this->hasMany(WalletMutation::class);
    }

    /**
     * Get the bill users for the payment
     */
    public function billUsers(): HasMany
    {
        return $this->hasMany(BillUser::class);
    }
}
