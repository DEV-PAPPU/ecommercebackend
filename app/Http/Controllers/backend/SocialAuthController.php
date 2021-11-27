<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Socialite;
class SocialAuthController extends Controller
{
    public function SocialSignup($provider)
    {
        // return 'ok';
        // Socialite will pick response data automatic
        $user = Socialite::driver($provider)->stateless()->user();

        return response()->json($user);
    }
}
