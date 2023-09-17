
import React, { useState } from 'react'
import categoryApi from '../../Api/Category/Category';
import { useNavigate } from 'react-router-dom';


export default function AddCategory() {


    // const [category, setCategory] = useState([])
    const [name, setName] = useState('')
    const [slug, setSlug] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate()


    async function Addcategory(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('image', image);
        categoryApi.addCategory(formData).then((response) => {
            console.log("status", response);
            if (response.status === 200) {
                console.log("add category", response.data.category);
                // setCategory(productsData.products);
                navigate('/home')

            } else {
                console.error('error to add category:', response.data.message);
                alert('error Please try again.');
            }
        }



        )
    }

    return (
        <div className='w-full'>
            <form onSubmit={Addcategory} encType="multipart/form-data"
                className="bg-white shadow-xl shadow-zinc-500 rounded px-6 pt-6 pb-8 mb-4">
                <h1 className="text-3xl font-bold mb-4 text-center">New Category</h1>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder="Enter category name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="slug" className="block text-gray-600 font-medium mb-2">Slug</label>
                    <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder="Enter slug"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="image" className="block text-gray-600 font-medium mb-2">Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-brown"
                        required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white font-serif font-bold py-2 px-4 rounded-full hover:bg-cyan-800 focus:outline-none focus:bg-gray-700"
                    >
                        Add Category
                    </button>
                </div>
            </form>
        </div>
    );
}





