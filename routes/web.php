<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PDFController;

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

Route::get('/mail', function () {
    return view('email_templates.order_status');
});



//Public Route
Route::get('/{any?}', function () {
    return view('public.app');
})->where('any', '[\/\w\.-]*');

