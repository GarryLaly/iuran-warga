<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Frontend\LoginController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ProfileController;
use App\Http\Controllers\Frontend\ReportController;
use App\Http\Controllers\Frontend\MemberController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', [LoginController::class, 'login']);
Route::post('/login', [LoginController::class, 'login_post']);
Route::get('/login/otp', [LoginController::class, 'loginOtp']);
Route::get('/home', [HomeController::class, 'home']);
Route::get('/profile', [ProfileController::class, 'profile']);
Route::get('/report', [ReportController::class, 'report']);
Route::get('/members', [MemberController::class, 'members']);