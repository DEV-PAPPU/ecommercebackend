<?php

namespace App\Http\Controllers\backend;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use App\Models\Category;
use Validator;

use Illuminate\Http\Request;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::latest()->get();
        // $categories = Category::latest()->paginate('5');
        // $categories = Category::orderBy('created_at','DESC')->paginate('3');

        return response()->json($categories, 200);
    }


    public function store(Request $request)
    {

        // dd($request->all());

        $this->validate($request, [

         'name' =>  'required',

        ]);

        $category = Category::create([

            'name' =>  $request->name,
            'slug' =>  Str::slug($request->name),
        ]);


        if($request->hasFile('image')){

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $category->save();
        }

      return response()->json($category, 200);

    }

  

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request->all());

        $category = Category::find($id);

        $this->validate($request, [
            'name' => "required|unique:categories,name, $category->id"
        ]);

        $category->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);


        if($request->hasFile('image')){

            $categoryImage = $category->image;
            $imagePath = public_path($categoryImage);

            if ($categoryImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $image_new_name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $image_new_name);
            $category->image = '/storage/images/' . $image_new_name;
            $category->save();
        }

        return response()->json('success', 200);
    }


    public function destroy($id)
    {
        $category = Category::find($id);

        if ($category) {
            $categoryImage = $category->image;
            $imagePath = public_path($categoryImage);

            if ($categoryImage && file_exists($imagePath)) {
                unlink($imagePath);
            }
            $category->delete();

        }

        return response()->json('success', 200);

    }


}

