<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Bill extends Model
{
    protected $fillable = [
        'wallet_id',
        'name',
        'amount',
        'status',
        'target_period',
        'start_at',
        'end_at'
    ];

    protected $casts = [
        'amount' => 'integer',
        'target_period' => 'integer',
        'start_at' => 'datetime',
        'end_at' => 'datetime'
    ];

    /**
     * Get the wallet that owns the bill
     */
    public function wallet(): BelongsTo
    {
        return $this->belongsTo(Wallet::class);
    }

    /**
     * Get the bill users for the bill
     */
    public function billUsers(): HasMany
    {
        return $this->hasMany(BillUser::class);
    }
}