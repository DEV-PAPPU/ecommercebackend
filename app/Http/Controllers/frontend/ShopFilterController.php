<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class ShopFilterController extends Controller
{
   public function filter(){
    $search = "Har";
  
    $users = DB::table('products')
            ->where('status', 1)
            ->where(function($query) use ($search){
                $query->where('title', 'LIKE', '%'.$search.'%')
                        ->orWhere('last_name', 'LIKE', '%'.$search.'%')
                        ->orWhere('email', 'LIKE', '%'.$search.'%');
            })
            ->get();

    dd($users);
   }
}
