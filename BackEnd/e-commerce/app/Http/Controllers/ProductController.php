<?php

namespace App\Http\Controllers;

use App\Models\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function products()
    {
        $products = Product::all('*');
        return response()->json([
            'products' => $products
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function showProduct(Product $product, $id)
    {
        $product = Product::findOrfail($id);
        return response()->json([
            "status" => 200,
            'product' => $product,
        ]);

    }


    /**
     * Remove the specified resource from storage.
     */
    public function deleteProduct(Product $product, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json([
                'status' => 'error',
                'message' => 'Product not found',
            ], 404);
        } else if ($product->delete()) {
            return response()->json([
                'status' => 'success',
                'message' => 'deleted product'
            ], 200);
        }
    }

    public function storeProduct(Request $request)
    {

        $product = new Product();

        $product->name = $request->name;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->category_id = $request->category_id;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $extension = $image->getClientOriginalExtension();
            $filename = time() . rand(11111, 99999) . "." . $extension;
            $image->move(public_path('uploads'), $filename);
            $product->image = $filename;

        }

        if ($product) {
            $product->save();
            return response()->json([
                'status' => 'success',
                'data' => $product,
                'message' => 'Product created successfully'
            ], 200);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Error Product not created',
            ], 500);
        }
    }
    // edit products
    public function editProduct(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'status' => 'error',
                'message' => 'product not found'
            ], 404);
        }


        $product->update($request->all());
        return response()->json([
            'product' => $product
        ], 200);


    }


    public function getProduct(Request $request, $id)
    {
        $product = Product::find($id);
        return response()->json([
            'product' => $product
        ], 200);
    }


}