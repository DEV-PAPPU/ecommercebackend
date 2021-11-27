<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Coupon;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $coupons = Coupon::with('user')->get();
        return response()->json($coupons, 200);
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
        $this->validate($request,[

            'coupon_code' => 'required|max:10',
            'coupon_amount' => 'required',
            'coupon_type' => 'required',
            // 'expiry_date' => 'required',
            // 'minimum_cost' => 'required',
            // 'usage_limit' => 'required',
            'status' => 'required',
            // 'category_id' => 'required',
            // 'user_id' => 'required'
        ]);

         $coupon = new Coupon();
         $coupon->coupon_code = $request->coupon_code;
         $coupon->coupon_type = $request->coupon_type;
         $coupon->coupon_amount = $request->coupon_amount;
         $coupon->user_id = $request->user_id;
         $coupon->status = $request->status;

         $coupon->save();

        return response()->json(['success' => 'Cououn Created Sucess'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function show(Coupon $coupon)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $coupon = Coupon::find($id);
        return response()->json($coupon, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

         $coupon = Coupon::findOrfail($id);
         $coupon->coupon_code = $request->coupon_code;
         $coupon->coupon_type = $request->coupon_type;
         $coupon->coupon_amount = $request->coupon_amount;
         $coupon->user_id = $request->user_id;
         $coupon->status = $request->status;
         $coupon->save();

         return response()->json(['success' => 'Cououn Updated Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Coupon  $coupon
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $coupon = Coupon::findOrfail($id);

        if($coupon){
            $coupon->delete();

            return response()->json('success', 200);
        }else {
            return response()->json('failed', 404);
        }
    }
}
