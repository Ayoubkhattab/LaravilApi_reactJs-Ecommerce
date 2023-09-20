import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
export default function CartItem() {
    const { cartItems } = useContext(CartContext)
    return (
        <div className='relative '>
            <Link to={'/AddToCart'}>
                <button className='p-1 rounded-lg  text-3xl hover:bg-gray-300 duration-300'>
                    < AiOutlineShoppingCart />
                    {
                        cartItems.length !== 0 ? <p className='absolute w-4 top-0 text-black left-0 text-base rounded-full bg-red-100 '>{cartItems.length}</p>
                            : ""
                    }
                </button >
            </Link>
        </div>
    )
}
