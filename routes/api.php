<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\AuthController;
use App\Http\Controllers\backend\AdminController;
use App\Http\Controllers\backend\CouponController;
use App\Http\Controllers\backend\CategoryController;
use App\Http\Controllers\backend\OrderController;
use App\Http\Controllers\backend\OrderManageController;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\backend\ProductController;
use App\Http\Controllers\backend\UserProfileController;
use App\Http\Controllers\backend\SocialAuthController;
use App\Http\Controllers\frontend\ShopController;
use App\Http\Controllers\frontend\CartController;
use App\Http\Controllers\frontend\WebproductController;
use App\Http\Controllers\AuthSanctumController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PDFController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function () {
    Route::get('logout', [AuthSanctumController::class, 'logout']);
});

//
Route::post('user-register', [AuthSanctumController::class, 'register']);
Route::post('user-login', [AuthSanctumController::class, 'login']);




Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user', [AuthController::class, 'userProfile']);

});

//Coupon
Route::get('coupons', [CouponController::class, 'index']);
Route::post('coupon/create', [CouponController::class, 'store']);
Route::get('coupon/edit/{id}', [CouponController::class, 'edit']);
Route::post('coupon/update/{id}', [CouponController::class, 'update']);
Route::post('coupon/delete/{id}', [CouponController::class, 'destroy']);
Route::post('coupon/apply', [OrderController::class, 'coupon_apply']);


Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/register', [AuthController::class, 'register']);
Route::get('verify', [AuthController::class, 'verifyUser']);
Route::post('reset-password', [AuthController::class, 'Password_Reset']);


Route::middleware('auth:api')->get('/auth/user/data', function (Request $request) {
    return $request->user();
});




Route::get('shop',[ShopController::class,'products']);
Route::get('product-category',[ShopController::class,'category']);

Route::get('public/category',[ShopController::class,'product_Category']);
Route::get('category/single/{slug}',[ShopController::class,'Category_single']);

Route::get('product-single/{slug}',[ShopController::class,'Product_single']);


Route::post('product-filter',[ShopController::class,'Product_filter']);

// Category
Route::get('category', [CategoryController::class, 'index']);
Route::post('category-create', [CategoryController::class, 'store']);
Route::post('category/delete/{id}', [CategoryController::class, 'destroy']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);


Route::resource('product', ProductController::class);
Route::post('product/update/{id}', [ProductController::class, 'update']);
Route::post('product/image/delete/{id}', [ProductController::class, 'Image_delete']);

Route::post('order-status-change/{id}', [OrderManageController::class, 'order_status_change']);
Route::post('order-privatr-massage/{id}', [OrderManageController::class, 'order_private_massage']);
Route::post('delete-order/{id}', [OrderController::class, 'destroy']);
Route::post('checkout-form-check', [OrderController::class, 'checkout_form_check']);
Route::get('/order-confirm', [OrderController::class, 'order_confirm']);
Route::post('/order-tracking', [OrderController::class, 'order_tracking']);


// Admin
Route::get('users', [UserController::class, 'index']);
Route::post('user/update/{id}', [UserController::class, 'update']);
Route::post('user/delete/{id}', [UserController::class, 'destroy']);
Route::get('admin/dashboard', [AdminController::class, 'admin_dashboard']);



// User sanctum
// User Route-Controller
Route::middleware('auth:sanctum')->group(function () {

    Route::post('order',[OrderController::class,'store']);

    // Route::resource('order', OrderController::class);

    Route::get('order/{id}',[UserProfileController::class,'Single_Order']);

    Route::get('/user-orders',[UserProfileController::class,'User_Orders']);
});



Route::get('php',[UserProfileController::class,'auth_test']);


Route::get('images',[GalleryController::class,'index']);
Route::post('gallery',[GalleryController::class,'store']);


//Products
Route::get('latest-products',[WebproductController::class,'latest_products']);


// Social login Signup route lsit
// Google login
Route::get('login/google', [SocialAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('login/google/callback', [SocialAuthController::class, 'handleGoogleCallback']);

// Facebook login
Route::get('login/facebook', [SocialAuthController::class, 'redirectToFacebook'])->name('login.facebook');
Route::get('login/facebook/callback', [SocialAuthController::class, 'handleFacebookCallback']);

// Github login
Route::get('login/github', [SocialAuthController::class, 'redirectToGithub'])->name('login.github');
Route::get('login/github/callback', [SocialAuthController::class, 'handleGithubCallback']);


Route::post('sociallogin/{provider}', 'Auth\AuthController@SocialSignup');
Route::get('auth/{provider}/callback', 'OutController@index')->where('provider', '.*');


// Github login
Route::post('sociallogin/{provider}', [SocialAuthController::class, 'SocialSignup']);
Route::get('login/github/callback', [SocialAuthController::class, 'handleGithubCallback'])->where('provider', '.*');

Route::get('generate-pdf', [PDFController::class, 'generatePDF']);

