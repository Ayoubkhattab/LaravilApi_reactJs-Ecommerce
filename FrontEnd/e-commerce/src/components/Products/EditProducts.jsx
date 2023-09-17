import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import {
//     Dropdown,
//     Ripple,
//     initTE,
//     Collapse
// } from "tw-elements";
// initTE({ Collapse, Dropdown, Ripple });



const EditProduct = () => {
    const { productId } = useParams();

    const [name, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null); // Use null for image
    const [price, setPrice] = useState();
    const [category_id, setCategory_id] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quantity, setNumofpeace] = useState(0);
    const [errors, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/category')
            .then(res => {
                setCategory_id(res.data.category);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

        axios.get(`http://localhost:8000/api/product/${productId}`)
            .then(res => {
                if (res.data.status === 200) {
                    const productData = res.data.product;
                    setTitle(productData.name);
                    setDescription(productData.description);
                    setPrice(productData.price);
                    setImage(productData.image);

                    if (typeof productData.category_id === 'number') {
                        setSelectedCategory(productData.category_id); // Set as a single value
                    } else {
                        // Handle the case where category_id is not a number
                        console.error('category_id is not a number in the API response:', productData.category_id);
                    }

                    setNumofpeace(productData.quantity);


                }
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [productId]);


    async function updateproducts(e) {
        e.preventDefault();

        const formData = new FormData(); // Use FormData for sending files
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('price', price);
        formData.append('category_id', selectedCategory);
        formData.append('quantity', quantity);
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/product/${productId}/edit`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }
            });

            console.log('Product added successfully:', response.data);
            navigate('/home')
        } catch (error) {
            console.error('Error adding product:', error);
            setError('An error occurred while adding the product.');
        }
    }
    return (
        <div className="flex flex-col rounded-xl shadow-2xl p-20 m-20 mt-10 bg-zinc-300" >
            <div >
                <h1 className='items-center text-3xl mb-5'> Edit Product</h1>
                <form onSubmit={updateproducts} className='container'>
                    <div className="mb-4" >
                        <label className="block text-gray-600 font-medium mb-2">name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-zinc-100 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                            placeholder="Enter your name"
                            name='title'
                        />

                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 font-medium mb-2">description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                            placeholder="Enter your email"
                            name='description'
                        />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2"> price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                            placeholder="Enter your password"
                            name='price'
                        />

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2"> quantity</label>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setNumofpeace(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                            placeholder="Enter your password"
                            name='quantity'
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
                        <img
                            src={`http://localhost:8000/uploads/${image}`}
                            alt={name}
                            width="100" // Set the width as needed
                            height="100" // Set the height as needed
                        />

                    </div>
                    <div >
                        <form>
                            {/* ... other form fields ... */}
                            <div className="mb-6">
                                <label className="block text-gray-600 font-medium mb-2"> Choose Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                                    name='category_id'
                                >
                                    <option value="">Select a category</option>
                                    {category_id.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>

                            </div>
                            {/* ... other form fields ... */}
                        </form>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 font-medium mb-2"> category</label>


                    </div>
                    <button
                        type="submit"
                        className='rounded-full bg-gray-800 w-1/3 p-3 m-3 hover:bg-cyan-800  font-serif font-bold text-white text-center'
                    >
                        edit Product
                    </button>
                </form>


            </div>
        </div>
    )
}
export default EditProduct;