<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Cart;
use Session;
class CartController extends Controller
{
    public function Index(){

        $cartsdata = Cart::getContent();
        $total = Cart::getSubTotal();

        $cart = Session::get('cart');

        return response()->json([
            'carts' => $cartsdata,
            'total' => $total,
            'session' => $cart,
        ], 200);

    }

    public function AddToCart($id){

        $product = Product::find($id);

            Cart::add(array(
            'id' => $product->id, // inique product ID
            'image' => $product->image,
            'name' => $product->title,
            'price' => $product->price,
            'quantity' => 1,
            'attributes' => array()

        ));

        return response()->json(['success' => 'Product Added'], 200);
    }

    public function Cart_Qty_Increment($id){

        // Increment quantity
            Cart::update($id, array(
                'quantity' => 1,
            ));

        return response()->json(['success' => 'Quantity Updated'], 200);
    }

    public function Quantity_Decrement($id){

        $product = Cart::get($id);

        if($product->quantity == 1){

            return response()->json(['massage' => 'Minimul 1'], 200);
        }

        // Decrement quantity
            Cart::update($id, array(
                'quantity' => -1,
            ));



        return response()->json(['success' => 'Quantity Updated'], 200);
    }

    public function Cart_Remove($id){

        Cart::remove($id);
        return response()->json(['success' => 'Product Removed'], 200);
    }

}
