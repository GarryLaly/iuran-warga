<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
use Illuminate\View\View;
 
class LoginController extends Controller
{
    public function login(): View
    {
        return view('frontend.auth.login');
    }
}