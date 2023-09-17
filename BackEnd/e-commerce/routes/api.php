<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [UserController::class, 'logout']);
});



/////// authintcation
Route::post('/register', [UserController::class, 'signUp']);
Route::post('/login', [UserController::class, 'login']);

////////////////////////////////////////////////

// get one product and all product and delete one product
Route::get('/products', [ProductController::class, 'products']);
Route::get('/product/{id}', [ProductController::class, 'showProduct']);
Route::post('/addproduct', [ProductController::class, 'storeProduct']);
Route::delete('/product/delete/{id}', [ProductController::class, 'deleteProduct']);
Route::post('/product/{id}/edit', [ProductController::class, 'editProduct']);
Route::get('/product/{id}/edit', [ProductController::class, 'getProduct']);


/////////////////////////////////// category
Route::get('/category', [CategoryController::class, 'getCategory']);
Route::post('/addcategory', [CategoryController::class, 'addCategory']);
Route::get('/category/{id}/edit', [CategoryController::class, 'getOneCategory']);
Route::get('/category/{id}/products', [CategoryController::class, 'getProductByCategory']);
Route::delete('/category/delete/{id}', [CategoryController::class, 'deleteCategory']);
Route::post('/category/{id}/edit', [CategoryController::class, 'editCategory']);

////// order
Route::get('/orders', [OrderController::class, 'getAllOrders']);
Route::get('/orders/{orderId}', [OrderController::class, 'getOneOrder']);
Route::post('/order', [OrderController::class, 'createOrder']);
Route::get('/order/{id}/edit', [OrderController::class, 'getOrderById']);
Route::post('/order/{id}/edit', [OrderController::class, 'updateOrder']);
Route::delete('/order/{id}', [OrderController::class, 'destroy']);


//get all users
Route::get('/users', [UserController::class, 'getAllUsers']);