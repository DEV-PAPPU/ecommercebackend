<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\OrderItems;
use App\Models\Coupon;
class UserController extends Controller
{
    public function index()
    {

        $users= User::latest()->get();

       return response()->json($users, 200);
    }



    public function update(Request $request, $id)
    {

        $user = User::find($id);

        // $this->validate($request, [
        //     'name' => "required|unique:user,name, $user->name",
        //     'email' => "required|unique:user,email, $user->email"
        // ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
        ]);

        return response()->json(['success' => 'User Updated'], 200);
    }


    public function destroy($id)
    {
        $User = User::find($id);

        $User->delete();

        $orders = Order::where('user_id', $id)->get();


        foreach ($orders as $order) {
            $order->delete();
            OrderItems::where('order_id', $order->id)->delete();
        }

       Coupon::where('user_id',$id)->delete();

        return response()->json('success', 200);

    }

}
