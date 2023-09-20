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


    // delete
    const handleDeleteProduct = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            // Make an API call to delete the product here
            productApi.deleteProduct(productId)
                .then((response) => {
                    if (response.status === 200) {
                        setProducts(product.filter(product => product.id !== productId));
                    } else {
                        alert('Failed to delete the product.');
                    }
                })
                .catch((error) => {
                    console.error('Error deleting product:', error);
                });
        }
    };



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
                    <div className='flex flex-row w-full justify-around mb-4 '>
                        <Link >
                            <button className='rounded-full bg-gray-800 w-full p-3
                         hover:bg-cyan-800  font-serif font-bold text-white text-center'
                                onClick={() => addToCart(product)}
                            >
                                Add to cart
                            </button>
                        </Link>
                        <Link to={`/product/${product.id}/edit`}>
                            <button className='rounded-full bg-gray-800 w-full p-3 px-6 hover:bg-cyan-800  font-serif font-bold text-white text-center' >
                                edit
                            </button>
                        </Link>
                        <Link to={`/home`}>
                            <button className='rounded-full bg-gray-800 w-full p-3
                            hover:bg-red-500  font-serif font-bold text-white text-center'
                                onClick={() => { handleDeleteProduct(productId) }}
                            >
                                delete
                            </button>
                        </Link>

                    </div>
                </div>

            </div >

        </>

    );
}

