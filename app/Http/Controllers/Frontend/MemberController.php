<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
 
class MemberController extends Controller
{
    public function members()
    {
        return inertia('Member/index');
    }
}
