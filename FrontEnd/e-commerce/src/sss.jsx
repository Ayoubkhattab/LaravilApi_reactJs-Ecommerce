// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoryHome = () => {
//     const [category, setCategory] = useState([]);

//     useEffect(() => {
//         // Fetch the list of categories from the server
//         axios
//             .get('http://localhost:8000/api/category')
//             .then((response) => {
//                 setCategory(response.data.category); // Set the state to the response data directly
//                 console.log("response:", response.data.category);
//             })
//             .catch((error) => {
//                 console.error('Error fetching categories:', error);
//             });
//     }, []);

//     return (
//         <section className='flex container md:flex-row sm:flex mx-10 flex-col mt-20'>
//             <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
//                 {category.map((product) => (
//                     <div key={product.id} className="overflow-hidden shadow-lg bg-gradient-to-r from-white via-gray-300 to-blue-400 rounded-3xl">
//                         <div className="font-bold text-xl mb-2">{product.name}</div>
//                         <p className="text-gray-700 text-base">
//                             {product.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default CategoryHome;

