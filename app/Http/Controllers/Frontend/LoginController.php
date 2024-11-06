<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
 
class LoginController extends Controller
{
    public function login()
    {
        return inertia('Login/index');
    }
}