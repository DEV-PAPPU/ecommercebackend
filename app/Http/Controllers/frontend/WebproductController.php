<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class WebproductController extends Controller
{
    public function latest_products(){
        $products = Product::latest()->take('6')->get();
        return response()->json($products, 200);
    }
}
