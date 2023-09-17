<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Http\Requests\UpdateOrderRequest;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function getAllOrders()
    {
        // Fetch all orders from the database
        $orders = Order::all();

        // Return the orders as a JSON response
        return response()->json([
            'orders' => $orders
        ], 200);
    }

    public function getoneOrder(Request $request, $id)
    {
        // Find the order by ID
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }

        // Return the order as a JSON response
        return response()->json(['order' => $order], 200);
    }

    public function createOrder(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'order_number' => 'required|unique:orders',
            'status' => 'required',
            'category_id' => 'required|exists:categories,id',
        ]);

        $order = new Order();
        $order->user_id = $request->user_id;
        $order->order_number = $request->order_number;
        $order->status = $request->status;
        $order->category_id = $request->category_id;
        $order->save();

        return response()->json([
            'message' => 'Order created successfully'
        ], 201);

    }


    public function getOrderbyId(Request $request, $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json([
                'message' => 'error in get order by ID  ',
            ], 404);
        }
        return response()->json([
            "message" => "get order by ID successfully",
            'order' => $order
        ], 200);

    }

    public function updateOrder(Request $request, $id)
    {

        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found'
            ], 404);
        }

        $order->user_id = $request->user_id;
        $order->order_number = $request->order_number;
        $order->status = $request->status;
        $order->category_id = $request->category_id;
        $order->update($request->all());

        return response()->json([
            "order" => $order,
            'message' => 'Order updated successfully '
        ], 200);
    }


    public function destroy(Order $order, $id)
    {

        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'error in delete'
            ], 404);
        }

        $order->delete();
        return response()->json([
            'message' => 'delete successfully'
        ], 200);
    }
}