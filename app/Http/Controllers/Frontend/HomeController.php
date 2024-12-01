<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
 
class HomeController extends Controller
{
    public function home()
    {
        $user = \Auth::user();
        return inertia('Home/index', [
            'user' => $user,
        ]);
    }
}
