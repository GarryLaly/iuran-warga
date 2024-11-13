<?php
 
namespace App\Http\Controllers\Frontend;
 
use App\Http\Controllers\Controller;
 
class ReportController extends Controller
{
    public function report()
    {
        return inertia('Report/index');
    }
}
