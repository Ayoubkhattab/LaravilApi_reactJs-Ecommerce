// Cart.js
import React, { useContext, useState } from 'react';
import Navbar from './Navbar/Navbar';
import { CartContext } from '../contexts/CartContext';

function Cart() {

    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)

    console.log('cart', cartItems);
    console.log('addToCart', addToCart);
    console.log('removeFromCart', removeFromCart);

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 gap-4 p-6 w-1/3 mx-auto mt-16">
                {cartItems.map((item) => (
                    <div className="max-w-md bg-white rounded-lg shadow-lg" key={item.id}>
                        <img
                            src={`http://localhost:8000/uploads/${item.image}`}
                            alt={item.name}
                            className="w-full rounded-t-lg"
                        />
                        <div className="m-2">
                            <h1 className="text-lg font-bold">{item.name}</h1>
                            <p className="text-gray-600">${item.price}</p>
                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <div className="flex justify-center items-center space-x-4 p-4">
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={() => {
                                    removeFromCart(item);
                                }}
                            >
                                -
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                onClick={() => {
                                    addToCart(item);
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
                {cartItems.length > 0 ? (
                    <div className="relative flex flex-col justify-between items-center mt-8">
                        <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                clearCart();
                            }}
                        >
                            Clear cart
                        </button>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold text-center text-gray-600 mt-8">
                        Your cart is empty
                    </h1>
                )}
            </div>
        </div>
    );


}

export default Cart;
