<?php

namespace App\Http\Middleware;
use Auth;
use Closure;
use Illuminate\Http\Request;
class Role
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

         $role = Auth::user();

        if(Auth::check() && $role){
            // return $next($request);
            return  "admin";
        }

        elseif(Auth::check() && $role == '1'){

            return  "customer";
        }

        else{
            return "Something is wrong";
        }

    }
}
