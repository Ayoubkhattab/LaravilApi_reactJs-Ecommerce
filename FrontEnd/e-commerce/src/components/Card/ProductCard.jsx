import React, { useEffect, useState } from 'react';
import productApi from '../../Api/Product/Product';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function ProductCard() {

    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const navigator = useNavigate()

    useEffect(() => {
        productApi.getProductByCategory(categoryId)
            .then((productsData) => {
                // console.log("status", productsData);
                if (productsData.status === 200) {
                    setProducts(productsData.products);
                } else {
                    alert('there are no products in this category: لايوجد منتجات بهذا القسم اضغط للعودة للصفحة الرئيسية')
                    navigator('/home')
                }
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, [categoryId]);
    // console.log(products);


    return (

        <div>
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col rounded-lg bg-white shadow-md">
                        <a href="#!">
                            {/* <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp" alt="Hollywood Sign on The Hill" /> */}
                            <img className="rounded-t-lg"
                                src={`http://localhost:8000/uploads/${product.image}`}
                                alt={product.name} />
                        </a>
                        <div className="p-4">
                            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
                                {product.name}
                            </h5>
                            <p className="text-base text-gray-600">
                                {product.slug}
                            </p>
                        </div>
                        <Link to={`/product/${product.id}`}
                            className='rounded-full bg-gray-800 w-30 p-3 m-3 hover:bg-cyan-800  font-serif font-bold text-white text-center'>
                            <button  >
                                show Details
                            </button>
                        </Link>

                    </div>

                ))}
            </div>
        </div>
    );
}

