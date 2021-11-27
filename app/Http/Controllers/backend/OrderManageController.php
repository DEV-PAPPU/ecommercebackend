<?php

namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Jobs\OrderStatusmailSent;
use App\Jobs\OrderPrivateEmail;

class OrderManageController extends Controller
{
    public function order_status_change(Request $request, $id){

        $order = Order::find($id);

        $order->update([
            'status' => $request->status,
        ]);


        $data = array(
            'name' =>  $order->first_name,
            'email' =>  $order->email,
            'status' => $request->status,
            'tracking_id' => $order->tracking,
        );

        OrderStatusmailSent::dispatch($data)
            ->delay(now()->addSeconds(2));

        return response()->json([
            'massage' => 'Order status updated'
        ], 200);

    }

    public function order_private_massage(Request $request, $id){

        $order = Order::find($id);

        $data = array(
            'name' =>  $order->first_name,
            'email' =>  $order->email,
            'massage' => $request->massage,
            'tracking_id' => $order->tracking,
        );

        OrderPrivateEmail::dispatch($data)
            ->delay(now()->addSeconds(2));

        return response()->json([
            'massage' => 'Email sent success'
        ], 200);

    }
}
