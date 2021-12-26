<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PDFController;
use App\Http\Controllers\frontend\ShopController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('generate-pdf', [PDFController::class, 'generatePDF']);
Route::get('left',[ShopController::class,'left_test']);


Route::get('/mail', function () {
    return view('email_templates.order_status');
});
Route::get('/php', function () {
   
    
    try {
        $error = 'Always throw this error';
        throw new Exception($error);      
        echo 'Never executed';
    }catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
    
    echo 'Hello World';
});



//Public Route
Route::get('/{any?}', function () {
    return view('public.app');
})->where('any', '[\/\w\.-]*');

