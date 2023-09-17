import React, { useContext, useEffect, useState } from 'react'
import productApi from '../Api/Product/Product';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { CartContext } from '../contexts/CartContext';
export default function ProuductDetailes() {

    const { productId } = useParams();
    const [product, setProducts] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext)

    useEffect(() => {
        productApi.getProductInfo(productId)
            .then((productsData) => {
                // console.log(productsData);
                setProducts(productsData);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, [productId]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center mt-0 ">
                <div className="max-w-md bg-white rounded-lg shadow-lg">

                    <img src={`http://localhost:8000/uploads/${product.image}`}
                        alt={product.name} className="w-full rounded-t-lg" />
                    {/* <img className="rounded-t-lg " src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp" alt="Hollywood Sign on The Hill" /> */}
                    <div className="m-2">
                        <h2 className="text-2xl font-semibold font-serif ">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="mt-2 text-lg text-gray-800 font-mono">${product.price}</p>
                        <p className="text-gray-600 ">Available quantity: {product.quantity}</p>
                    </div>
                    <Link to={`/product/${product.id}/edit`}>
                        <button className='m-2 bg-gray-200 p-2 rounded-lg' >
                            edit
                        </button>
                    </Link>
                    <button className='m-2 bg-gray-200 p-2 rounded-lg'
                        onClick={() => addToCart(product)}
                    >
                        Add to cart
                    </button>
                </div>

            </div >

        </>

    );
}

