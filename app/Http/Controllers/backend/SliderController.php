<?php

namespace App\Http\Controllers\backend;
use App\Models\Slider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    public function index(){
         $sliders = Slider::latest()->get();
         return response()->json($sliders, 200);
    }
    public function store(Request $request){
         
            // dd($request->all());

            if($request->hasFile('image')){

                // dd($request->all());

                $image = $request->image;
                // $name = rand(11111, 99999) . '.' . $request->file('image')->getClientOriginalExtension();
                $name = time() . '.' . $image->getClientOriginalExtension();
                        
                $image->move('storage/images/', $name);
                $slider_img = '/storage/images/' . $name;

                $slider = new Slider();
                $slider->slider = $slider_img;
                $slider->save();

            }

            // $image = $request->image;
            // // $name = rand(11111, 99999) . '.' . $request->file('image')->getClientOriginalExtension();
            // $name = time() . '.' . $image->getClientOriginalExtension();
                      
            // $image->move('storage/images/', $name);
            // $slider_img = '/storage/images/' . $name;

            // $slider = new Slider();
            // $slider->slider = $slider_img;
            // $slider->save();


            return response()->json([
                'msg' => 'success'
            ], 200);

    }

    public function destroy($id)
    {

        $slider = Slider::find($id);

        if ($slider) {
            $sliderImage = $slider->slider;
            $imagePath = public_path($sliderImage);

            if ($sliderImage && file_exists($imagePath)) {
                unlink($imagePath);
            }
            $slider->delete();

        }

        return response()->json([
            'msg' => 'success'
        ], 200);

    }
}
