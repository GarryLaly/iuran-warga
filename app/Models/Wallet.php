<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Wallet extends Model
{
    protected $fillable = [
        'user_id',
        'balance',
        'total_in',
        'total_out'
    ];

    protected $casts = [
        'balance' => 'integer',
        'total_in' => 'integer',
        'total_out' => 'integer'
    ];

    /**
     * Get the user that owns the wallet
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the bills for the wallet
     */
    public function bills(): HasMany
    {
        return $this->hasMany(Bill::class);
    }

    /**
     * Get the wallet mutations for the wallet
     */
    public function walletMutations(): HasMany
    {
        return $this->hasMany(WalletMutation::class);
    }
}