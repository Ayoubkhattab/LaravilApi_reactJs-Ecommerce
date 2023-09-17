
import { createContext, useContext, useEffect, useState } from "react";
import categoryApi from "../Api/Category/Category";
import axios from "axios";

const CategoryContext = createContext([]);

export default CategoryContext;

export const CategoryProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // Add loading state
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        categoryApi.getAll()
            .then((response) => {
                console.log('res', response);
                setCategoryData(response);
            })
            .catch((err) => {
                console.error('err', err);
            });
    }, []); // No dependencies for testing


    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator until data is available
    }

    return (
        <CategoryContext.Provider value={categoryData}>
            {children}
        </CategoryContext.Provider>
    );
};

