<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\User;
use App\Models\Category;
use App\Models\Product;
class AdminController extends Controller
{
    function admin_dashboard(){

       $all_orders = Order::all();
       $all_users = User::all();
       $all_products = Product::all();

       $orders = count($all_orders);
       $users = count($all_users);
       $products = count($all_products);

       return response()->json([
           'orders' => $orders,
           'users' => $users,
           'products' => $products,
       ], 200);
    }
}
