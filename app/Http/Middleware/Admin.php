<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Auth;
use Session;
class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $role = Auth::user()->role;
        // 0 for admin
        // 1 for user
        if(Auth::check() && $role == '0'){

            return $next($request);
        }

        else if(Auth::check() && $role == '1'){

            return redirect('home');
        }

        else if(!Auth::check()){

            return redirect('home');
        }

        else{
            return redirect('home');
        }
    }
}
