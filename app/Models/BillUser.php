<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BillUser extends Model
{
    protected $fillable = [
        'bill_id',
        'bill_name',
        'bill_amount',
        'user_id',
        'payment_id',
        'status',
        'period',
        'start_at',
        'end_at'
    ];

    protected $casts = [
        'bill_amount' => 'integer',
        'period' => 'integer',
        'start_at' => 'datetime',
        'end_at' => 'datetime'
    ];

    /**
     * Get the bill that owns the bill user
     */
    public function bill(): BelongsTo
    {
        return $this->belongsTo(Bill::class);
    }

    /**
     * Get the user that owns the bill user
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the payment that owns the bill user
     */
    public function payment(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }
}