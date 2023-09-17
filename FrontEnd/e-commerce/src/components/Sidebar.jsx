import React from "react";

export default function Sidebar({
    ShowCategoryClick,
    AddProductClick,
    EditCategoryClick }) {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                    onClick={AddProductClick}
                                >
                                    <span>add product</span>
                                </a>
                            </li>
                            <hr />
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                    onClick={ShowCategoryClick} // Call the function to load AddCategory
                                >
                                    <span>Add Category</span>
                                </a>
                            </li>
                            <hr />
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span>more ....</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
