<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderItems;
use Illuminate\Support\Facades\Auth;
class UserProfileController extends Controller
{
  public function auth_test(Request $request){

    return  Auth::user()->id;;
  }

  public function User_Orders(){

     $user_id = Auth()->user()->id;

    $user_orders = Order::where('user_id', $user_id)->get();
    return response()->json($user_orders, 200);
  }


  public function Single_Order($id){

    $order_id = $id;
    $order_items = OrderItems::with('product')->where('order_id',$order_id)->get();

    return response()->json($order_items, 200);

  }

}
