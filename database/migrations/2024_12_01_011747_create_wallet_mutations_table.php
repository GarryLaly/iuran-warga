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
        Schema::create('wallet_mutations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('wallet_id')->constrained();
            $table->foreignId('user_id')->constrained();;
            $table->integer('payment_id')->constrained();
            $table->enum('type', ['in', 'out'])->default('in');
            $table->integer('amount')->default(0);
            $table->integer('balance')->default(0); //balance yang sebelum berkurang/bertambah
            $table->text('notes')->nullable();
            $table->text('file_proof')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wallet_mutations');
    }
};
