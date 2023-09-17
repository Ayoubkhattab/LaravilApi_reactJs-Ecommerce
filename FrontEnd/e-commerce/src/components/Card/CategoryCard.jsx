import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ categories }) {

    // console.log(categories);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
            {categories.map((category) => (
                <div key={category.id} className="flex flex-col rounded-lg bg-white shadow-md">
                    {/* <img className="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp" alt="Hollywood Sign on The Hill" /> */}
                    <img
                        className="rounded-t-lg"
                        src={`http://localhost:8000/uploads/${category.image}`}
                    // alt={category.name}
                    />
                    <div className="p-4">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
                            {category.name}
                        </h5>
                        <p className=" text-base text-gray-600 overflow-hidden">
                            {category.slug}</p>
                    </div>

                    <Link
                        to={`/category/${category.id}/products`}
                        className="rounded-full bg-gray-800 w-30 p-3 m-3 hover:bg-cyan-800 font-serif font-bold text-white text-center"
                    >
                        <button>show Products</button>
                    </Link>

                    {/* <Link to={`/category/${category.id}/edit`}>
                        <button className='m-2 bg-gray-200 p-2 rounded-lg' >
                            edit
                        </button>
                    </Link> */}
                </div>
            ))
            }

        </div >
    );
}

export default CategoryCard;

