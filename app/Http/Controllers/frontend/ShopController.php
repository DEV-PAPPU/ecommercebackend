<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Session;

class ShopController extends Controller
{
    public function products()
    {
        //Status 0 == publish
        $products = Product::where('status',0)->get();
        return response()->json($products, 200);
    }

    public function Product_single($slug)
    {
        $product = Product::with('category','galleryimages')->where('slug',$slug)->first();
        return response()->json($product, 200);
    }

    public function product_Category()
    {
        $categories = Category::latest()->take('5')->get();
        return response()->json($categories, 200);
    }

    public function Category_single($slug)
    {
        // return 'getting ok';
        $category = Category::where('slug', $slug)->get();

        $id = $category[0]->id;

        $products = Product::with('category')->where('category_id', $id)->get();
        return response()->json($products, 200);
    }


    public function AddToCart($id)
    {

        $product = Product::find($id);

        // return $product;

        // $cart = Session::get('cart');

        //   //if this product exist then increment quantity
        //     if(isset($cart[$id])){
        //         // return 'Already added';
        //         $quantity =  $cart[$id]['quantity'];
        //         $quantity++;
        //     }

        //     // if item not exist in cart then add to cart with quantity = 1
            // $cart[$id] = [
            //     "name" => $product->title,
            //     "image" => $product->image,
            //     "price" => $product->price,
            //     "quantity" => 1
            // ];

        //   Session::put('cart', $cart);

          Session()->put('order_details',[
              "name" => $product->title,
              "image" => $product->image,
              "price" => $product->price,
              "quantity" => 1
            ]);

         return response()->json([
             'cartdata' => Session()->get('order_details')
         ], 200);

    }


    public function Cart_Items(){

        $cart_itesms = Session::get('cart');

      return response()->json($cart_itesms, 200);

    }
    
    public function Product_filter(Request $request){

         $from_price_range = 10;
         $price_range = $request->price_range;

        $products = Product::select('*')
        ->where('status',0)
        ->whereBetween('price', [$from_price_range, $price_range])
        ->get();
        return response()->json($products, 200);

    }

    public function category(){
        $categories = Category::latest()->select(['id', 'name'])->get();
        return response()->json($categories, 200);


    }
}
