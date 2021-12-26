<?php

namespace App\Http\Controllers\backend;
use Auth;
use Cart;
use PDF;
use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Coupon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Jobs\OrderEmailSent;
class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $orders = Order::paginate('5');
       return response()->json($orders, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        if($request->payment_method == 'stripe'){
          return 'stripe';

                \Stripe\Stripe::setApiKey('sk_test_51ImMYLL8CFL5l5Nj8ABACoXjon8HlNVSWRL2LiTNSCw2QBQeDusGYoskA0895tgPd8zVPwg2Y0jFxsZkYSjqCivj003dUkfPMc');
                header('Content-Type: application/json');
                $YOUR_DOMAIN = 'http://ecommerce.test';
                $checkout_session = \Stripe\Checkout\Session::create([
                    'payment_method_types' => ['card'],
                    'line_items' => [[
                        'price_data' => [
                            'currency' => 'usd',
                            'unit_amount' => 2000,
                            'product_data' => [
                                'name' => 'Stubborn Attachments',
                                'images' => ["https://i.imgur.com/EHyR2nP.png"]
                            ],
                        ],
                        'quantity' => 1,
                    ]],
                    'mode' => 'payment',
                    'success_url' => $YOUR_DOMAIN . '/login',
                    'cancel_url' => $YOUR_DOMAIN . '/login',
                ]);
                echo json_encode(['id' => $checkout_session->id]);

        }

        //  return $request;

        $tracking = rand(111111, 999999);
        // $subtotal = Cart::getSubTotal();

        $order = Order::Create([
            'user_id' => Auth()->user()->id,
            'email' => $request->email,
            'first_name' => $request->first_name,
            'address' => $request->address,
            'zipcode' => $request->zipcode,
            'state' => $request->state,
            'city' => $request->city,
            'country' => $request->country,
            'tracking' => $tracking,
            'phone' => $request->phone,
            'payment_method' => $request->payment_method,
            'discount_price' => $request->discount_price,
            'subtotal' => $request->subtotal
        ]);

        $products = $request->products;

        // $cart_items = Cart::getContent();

        foreach($products as $product){

            OrderItems::Create([
                'order_id' => $order->id,
                'product_id' => $product['product_id'],
                'quantity' => $product['quantity'],
                'price' => $product['price']
            ]);
        }

        // Cart::clear();

        $order_items = OrderItems::with('product')->where('order_id', $order->id)->get();

        $data = array(
            'name' =>  $request->first_name,
            'email' =>  $request->email,
            'products' =>  $order_items,
            'tracking_id' =>  $tracking,
            'discount_price' => $request->discount_price,
            'subtotal' => $request->subtotal
           );

        OrderEmailSent::dispatch($data)
            ->delay(now()->addSeconds(2));

     return response()->json([
         'massage' => 'Order has been complated'
     ],200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    public function single_order($id)
    {
        $order_id = $id;
        $order = Order::find($id);
        
        $order_items = OrderItems::with('product')->where('order_id','=',$order_id)->get();
        // $order_items = OrderItems::where('order_id','=',$order_id)->get();

        if($order){

            return response()->json([
                'order' => $order,
                'products' => $order_items
            ], 200);

        }else {
            return response()->json('failed', 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {

        $order->update([
            'status' => $request->status,
        ]);

        return response()->json($order, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Order  $order
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order =  Order::findOrFail($id);

        $order->delete();

        $orderItems = OrderItems::where('order_id', $id)->get();

        foreach ($orderItems as $item) {
           $item->delete();
        }

        return response()->json([
            'massage' => 'Order deleted'
        ], 200);

    }

    public function order_confirm(){

        $auth_id = Auth::user()->id;
        $order = Order::where('user_id', $auth_id)->latest()->take(1)->get();

        $order_Id = $order[0]->id;

        $order_items = OrderItems::with('product')->where('order_id','=', $order_Id)->get();

        return response()->json([
            'order' => $order,
            'orderitems' => $order_items
        ], 200);
    }



    // private $variable;

    // public function __construct($whatever)
    // {
    //     $this->variable = $whatever;
    // }

    // public function method1($newValue)
    // {
    //     $this->variable = $newValue;
    // }


    public function order_tracking(Request $request)
    {
        $tracking_id = $request->number;
        $tracking_data = Order::where('tracking','=',$tracking_id)->get();
        return   $tracking_data;

    }


    public function coupon_apply(Request $request)
    {
        $auth_id = Auth::user()->id; // current auth user
        $user_coupon_code = $request->coupon_code; // Getting Coupon Code From user input
        $coupon = Coupon::where('coupon_code',$user_coupon_code)->first(); // Checking  coupon user_coupon_code exist or not in db

        $valid_coupon = ''; // Data will store here base on the condition

        $massage = ''; // Massage will store here base on the condition

        //Checking coupon code condition
        if($coupon){

            //if coupon code  user_id 0 then  this coupon-code for all-users
            if($coupon->user_id == '0'){

                // Checking coupon status active or not if 0 then active
                if($coupon->status == '0'){

                    $massage = 'Coupon Applyed';
                    $valid_coupon = $coupon; // store coupon data

                }else{
                    $massage = 'invalid coupon code';
                }
            }

            // if coupon code for selected  user that select admin
            else if($coupon->user_id === $auth_id){

                // Checking coupon status active or not if 0 then active
                if($coupon->status == '0'){

                    $massage = 'Coupon Applyed';
                    $valid_coupon = $coupon; // store coupon data

                }else{
                    $massage = 'invalid coupon code';
                }

            }

            //if coupon code for selected user that select admin && if coupon->user_id current_user_id do not match
            else if($coupon->user_id !== $auth_id){

                $massage = 'This Coupon code is for you';

            }
        }

        else{
            // if invalid coupon code
            $massage = 'invalid coupon code';
        }

        // Sending data with massage to frontend
        return response()->json([
           'coupon' => $valid_coupon,
           'massage' => $massage
        ], 200);

    }


    public function checkout_form_check(Request $request){

        $this->validate($request, [

            'email' => 'required',
            'first_name' => 'required',
            'address' => 'required',
            'zipcode' => 'required',
            'state' => 'required',
            'city' => 'required',
            'country' => 'required',
            'phone' => 'required',
           ]);

        return response()->json([
            'massage' => 'success'
        ], 200);

    }

    public function order_pdf_download($id){
      
        $order_id = $id;
        
        $order = Order::find($id);
        
        $order_items = OrderItems::with('product')->where('order_id','=',$order_id)->get();
       
        $data = [
            'title' => 'Order Invoice',
            'date' => date('m/d/Y'),
            'order' => $order,
            'products' => $order_items
        ];
          
        $pdf = PDF::loadView('myPDF', $data);
    
        return $pdf->download('order.pdf');
    }

}
