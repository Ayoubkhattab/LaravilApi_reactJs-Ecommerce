import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
export default function CartItem() {
    return (
        <>
            <Link to={'/AddToCart'}>
                <button className='p-1 rounded-lg text-3xl hover:bg-gray-300 duration-300'>
                    < AiOutlineShoppingCart />
                </button >
            </Link>
        </>
    )
}
