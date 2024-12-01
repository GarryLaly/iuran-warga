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
        Schema::create('bill_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('bill_id')->constrained();
            $table->string('bill_name');
            $table->integer('bill_amount');
            $table->foreignId('user_id')->constrained();
            $table->foreignId('payment_id')->constrained();
            $table->enum('status', ['pending', 'paid', 'failed'])->default('pending');
            $table->integer('period')->default(1);
            $table->timestamp('start_at');
            $table->timestamp('end_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bill_users');
    }
};
