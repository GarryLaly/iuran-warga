<?php
 
namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Otp;
use App\Models\User;
class LoginController extends Controller
{
    public function login()
    {
        return inertia('Login/index');
    }

    public function login_post(Request $request)
    {
        // Validate request
        $request->validate([
            'phone' => 'required|string|max:20'
        ]);

        // Generate 6 digit OTP
        $otp = random_int(111111, 999999);
        
        // Create or update OTP record
        $otpRecord = Otp::updateOrCreate(
            ['phone' => $request->phone],
            [
                'otp' => $otp,
                'status' => 'new',
                'expired_at' => now()->addMinutes(2),
                'max_request' => 3
            ]
        );

        // Check if max requests reached
        if ($otpRecord->hasReachedMaxRequest()) {
            return redirect()->back()->with([
                'message' => 'Too many OTP requests. Please try again later.',
                'type' => 'error',
            ]);
        }

        // Increment the request count
        $otpRecord->incrementRequest();

        // Create or update user
        User::updateOrCreate(
            ['phone' => $request->phone],
            [
                'password' => \Hash::make($otp),
                'role' => 'user'
            ]
        );

        // TODO: Send OTP via WhatsApp
        // For now, we'll just dump it
        \Log::info('OTP for ' . $request->phone . ': ' . $otp);

        return redirect('/login/otp')->with([
            'phone' => $request->phone,
            'message' => 'OTP berhasil dikirim',
        ]);
    }

    public function loginOtp()
    {
        return inertia('LoginOtp/index');
    }
}
