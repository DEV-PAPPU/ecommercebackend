<?php
namespace App\Http\Controllers;
use App\Models\Gallery;
use Illuminate\Http\Request;
class GalleryController extends Controller
{

    public function index(){
        $gallery = Gallery::all();

        return response()->json($gallery, 200);

    }


    public function store(Request $request)
    {
        if($request->hasFile('files')){

            foreach($request->file('files') as  $image){

                $name = time() . '.' . $image->getClientOriginalExtension();
                $image->move('storage/images/', $name);
                $last_img = '/storage/images/' . $name;

                $gallery = new Gallery();
                $gallery->images = $last_img;
                $gallery->save();
            }
        }

        return response()->json(['success' => 'Gallery Created Sucess'], 200);
    }
}
