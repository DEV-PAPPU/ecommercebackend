<?php

namespace App\Http\Controllers\backend;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductGallery;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class ProductController extends Controller
{

   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $products = Product::all();
        $products = Product::with('category')->get();
        return response()->json($products, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return response()->json($categories,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());

        $this->validate($request ,[

            'title' => 'required',
            'price' => 'required|integer',
            'category_id' => 'required',
            'description' => 'required',
            'feature_image' => 'required',
            'status' => 'required',

           ]);

           $product = Product::Create([

               'title' => $request->title,
               'slug' =>  Str::slug($request->title),
               'price' => $request->price,
               'user_id' => 1,
            //    'user_id' => Auth::user()->id,
               'status' => $request->status,
               'category_id' => $request->category_id,
               'short_description' => $request->short_description,
               'description' => $request->description,

           ]);

        if($request->hasFile('feature_image')){
            $image = $request->feature_image;
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $name);
            $product->image = '/storage/images/' . $name;
            $product->save();
        }

        //  Inserting product gallery images
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                // $name = $image->getClientOriginalName();
                $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                //Inserting product gallery images to {ProductGallery} model
                $gallery = new ProductGallery();
                $gallery->product_id = $product->id;
                $gallery->image = $last_img;
                $gallery->save();
            }
        }


        return response()->json(['success' => 'Product Created Sucess'], 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(product $product)
    {
        $product_id = $product->id;

        $edit_product = Product::with('galleryimages')->where('id',$product_id)->get();

        return response()->json($edit_product, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        //  dd($request->all());


        $product =  Product::findOrFail($id);

        $this->validate($request, [

            'title' => 'required',
            'price' => 'required|integer',
            'description' => 'required',

        ]);

        $product->update([
        'title' => $request->title,
        'slug' => Str::slug($request->title),
        'price' => $request->price,
        'status' => $request->status,
        'category_id' => $request->category_id,
        'description' => $request->description,
        ]);


        if($request->hasFile('image')){
        
            $productImage = $product->image;
            $imagePath = public_path($productImage);

            if ($productImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $image = $request->image;
            $name = time() . '.' . $image->getClientOriginalExtension();
            $image->move('storage/images/', $name);
            $product->image = '/storage/images/' . $name;
            $product->save();
        }

        //  Inserting product gallery images
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                $name = time().rand(1,100).'.'.$image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                //Inserting product gallery images to {ProductGallery} model
                $gallery = new ProductGallery();
                $gallery->product_id = $product->id;
                $gallery->image = $last_img;
                $gallery->save();
            }
        }


        return response()->json(['success' => 'Update Sucess'], 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(product $product)
    {


        if ($product) {
            $productImage = $product->image;
            $imagePath = public_path($productImage);

            if ($productImage && file_exists($imagePath)) {
                unlink($imagePath);
            }
            $product->delete();

        }


        $product_images =  ProductGallery::where('product_id', $product->id)->get();

        if ($product_images) {

            $images = $product_images;

            foreach($images as $gallery){

                $imagePath = public_path($gallery->image);
                unlink($imagePath);

                ProductGallery::where('product_id', $product->id)->delete();
            }
        }

        return response()->json([
            'massage' => 'Product Deleted'
        ],200);

    }



    public function searchData($search){
        $productssearchdata = Product::with('category')->where('title','LIKE','%'.$search.'%')->get();
        return response()->json($productssearchdata,200);
    }


    public function Image_delete($id)
    {
        // return $id;
         $product_image =  ProductGallery::findOrFail($id);

        if ($product_image) {
            $productImage = $product_image->image;

            $imagePath = public_path($productImage);

            if ($productImage && file_exists($imagePath)) {
                unlink($imagePath);
            }

            $product_image->delete();

        } else {
            return response()->json('image not found.', 404);
        }
    }

}
