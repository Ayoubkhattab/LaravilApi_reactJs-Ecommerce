import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar";
import AddCategory from "../components/Category/AddCategory";
import AddProduct from "../components/Products/AddProduct";
import EditCategory from "../components/Category/EditCategory";

export default function Dashboard() {
    const [content, setContent] = useState(null);


    const showAddCategory = () => {
        setContent(<AddCategory />);
    };

    const showAddProduct = () => {
        setContent(<AddProduct />);
    };





    return (
        <div >
            <Navbar />
            <div className="flex">
                <Sidebar
                    ShowCategoryClick={showAddCategory}
                    AddProductClick={showAddProduct}
                />
                <div className="w-screen">
                    <div className="grid grid-cols-1 gap-3 m-2 p-4 md:grid-cols-1 lg:grid-cols-1 lg:px-20">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}
