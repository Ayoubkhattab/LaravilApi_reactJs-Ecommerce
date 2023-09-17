
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCategory = () => {

    const { categoryId } = useParams();
    const [name, setTitle] = useState('');
    const [slug, setDescription] = useState('');
    const [image, setImage] = useState(null); // Use null for image

    const navigate = useNavigate()





    useEffect(() => {
        axios.get(`http://localhost:8000/api/category/${categoryId}/edit`)
            .then((res) => {
                // console.log('response', res)
                const productData = res.data.category;
                console.log('productData', productData)
                setTitle(productData.name);
                setDescription(productData.slug);
                setImage(productData.image);
            })
    }, [categoryId])


    async function Addproducts(e) {
        e.preventDefault();
        console.log('category successfully:');

        const formData = new FormData(); // Use FormData for sending files
        formData.append('name', name);
        formData.append('slug', slug);
        formData.append('image', image);

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/category/${categoryId}/edit`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            });
            console.log('Product added successfully:', response.data);
            console.log('category added successfully:', response.data.message);
            // navigate('/home')
        } catch (error) {
            console.error('Error adding category:', error);
        }
    }


    return (

        <div >
            {/* <CategoryCard /> */}
            <div className='sb-nav-fixed'>
                <div id='layoutSidenav'>
                    <div id="layoutSidenav_nav">
                    </div>
                    <div className="lg:w-full lg:ml-64 px-6 py-8">
                        {categoryId}
                        <form onSubmit={Addproducts} dir='rtl' className='container'>
                            <h1 className='text-3xl font-bold mb-2'> Edit Category</h1>
                            <div className="mb-4" >
                                <label className="block text-gray-600 font-medium mb-2">name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                                    placeholder="Enter name"
                                    name='name'
                                />

                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 font-medium mb-2">slug</label>
                                <input
                                    type="text"
                                    value={slug}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                                    placeholder="Enter your slug"
                                    name='slug'
                                />

                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-600 font-medium mb-2">image </label>
                                <input
                                    type="file"

                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                                    name='image'
                                />

                            </div>
                            <button
                                type="submit"

                                className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-200 focus:outline-none focus:ring focus:ring-brown-dark"
                            >
                                Edit Category
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default EditCategory;


