<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
 
class ProfileController extends Controller
{
    public function profile()
    {
        $user = \Auth::user();
        return inertia('Profile/index', [
            'user' => $user,
        ]);
    }
}
