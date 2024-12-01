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
        Schema::create('otps', function (Blueprint $table) {
            $table->id();
            $table->string('otp', 6);
            $table->string('phone', 20);
            $table->enum('status', ['new', 'used'])->default('new');
            $table->timestamp('expired_at');
            $table->timestamp('max_request_at')->nullable(); //digunakan untuk akses kembeli setelah reached max request
            $table->integer('count_request')->default(0);
            $table->integer('max_request')->default(3);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('otps');
    }
};
