<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->text('qr_payload');
            $table->integer('total_amount');
            $table->enum('status', ['pending', 'paid', 'failed'])->default('pending');
            $table->text('notes'); //[bill_name] + [period pakai koma]: Iuran Bulanan 2024 period 8,9
            $table->timestamp('request_at');
            $table->timestamp('paid_at')->nullable();
            $table->timestamp('expired_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
