<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\LoginController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'login']);