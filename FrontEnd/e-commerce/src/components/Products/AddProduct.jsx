import React, { useEffect, useState } from 'react'
import productApi from '../../Api/Product/Product';
import categoryApi from '../../Api/Category/Category';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState(0)
    const [quantity, setQty] = useState(0)
    const [category_id, setCategoryId] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate()




    async function addProduct(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('quantity', quantity);
        formData.append('category_id', selectedCategory);
        productApi.addProduct(formData)
            .then((response) => {
                if (response.status === 200) {
                    console.log("add product", response);
                    navigate('/home')
                }
                else {
                    console.error('error to add category:', response.data.message);
                    alert('error Please try again.');
                }
            })
    }

    useEffect(() => {
        categoryApi.getAll()
            .then((categoryData) => {
                console.log(categoryData);
                setCategoryId(categoryData);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    // console.log(category_id);

    return (
        <div className='bg-white w-4/5 h-full rounded-lg shadow-xl shadow-zinc-600 '>
            <form onSubmit={addProduct} className="mx-4 my-1 ">
                <h1 className="text-2xl font-mono mb-1 "> add Product</h1>
                <div >
                    <label className=" text-gray-600 font-medium">name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder="product name"
                        name='name'
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 font-medium mb-2">description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder=" description"
                        name='description'

                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 font-medium mb-2">price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder="price"
                        name='price'

                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 font-medium mb-2">quantity</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQty(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                        placeholder=" quantity "
                        name='quantity'
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-600 font-medium mb-2">image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                    />
                </div>
                <div >
                    <label className="block text-gray-600 mb-2 font-medium"> catgory</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-brown"
                        name='category_id'
                    >
                        <option value="">choose category </option>
                        {category_id.map((category) => (
                            <option key={category.id}
                                value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className='rounded-full bg-gray-800 w-full p-3 mt-2 mb-4 hover:bg-cyan-800  font-serif font-bold text-white text-center'
                >
                    add products
                </button>
            </form>
        </div>
    )
}
