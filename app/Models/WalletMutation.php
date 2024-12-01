<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WalletMutation extends Model
{
    protected $fillable = [
        'wallet_id',
        'user_id',
        'payment_id',
        'type',
        'amount',
        'balance',
        'notes',
        'file_proof'
    ];

    protected $casts = [
        'amount' => 'integer',
        'balance' => 'integer'
    ];

    /**
     * Get the wallet that owns the mutation
     */
    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class);
    }

    /**
     * Get the user that owns the mutation
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the payment that owns the mutation
     */
    public function payment(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }
}