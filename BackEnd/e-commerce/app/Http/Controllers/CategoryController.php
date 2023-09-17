<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Product;

class CategoryController extends Controller
{
    public function getCategory()
    {

        $category = Category::all();

        return response()->json([
            'category' => $category,
        ]);
    }
    public function getOneCategory(Category $request, $id)
    {
        $category = Category::find($id);

        if ($category) {
            return response()->json([
                'category' => $category,
                'message' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'error try again'
            ]);
        }
    }

    public function deleteCategory(Category $request, $id)
    {
        $category = Category::find($id);
        if (!$category) {
            return response()->json([
                'status' => 'error',
                'message' => 'category not found',
            ], 404);
        } else {
            $category->delete();

            return response()->json([
                'status' => 'success',
                'message' => 'deleted category'
            ]);
        }
    }


    public function getProductByCategory(Category $request, $id)
    {
        $products = Product::where('category_id', $id)->get();

        if ($products->count() != 0) {

            return response()->json([
                "status" => 200,
                'products' => $products,
            ]);
        } else {
            error_log("Category ID: $id");
            return response()->json([
                "status" => 404,
                'message' => 'products not found',
                // 'id' => $id
            ]);
        }
    }

    public function editCategory(Request $request, $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'status' => 'error',
                'message' => 'category not found',
            ], 404);
        }


        $category->update($request->all());
        return response()->json([
            'status' => 'success',
            'category' => $category,
            'message' => 'success update'
        ]);

    }

    public function addCategory(Request $request)
    {

        try {
            $category = new Category();

            $category->name = $request->name;
            $category->slug = $request->slug;

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $filename = time() . rand(11111, 99999) . "." . $extension;
                $image->move(public_path('uploads'), $filename);
                $category->image = $filename;
                $category->save();
            }

            return response()->json([
                'category' => $category,
                'message' => 'success',
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating category',
                'error' => $e->getMessage()
            ], 500);

        }
    }
}