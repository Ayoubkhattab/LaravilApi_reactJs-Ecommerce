import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import NotFound from './views/Auth/NotFound';
import Guest from './components/Guest';
import Default from './components/Default';
import HomePage from './views/HomePage';
import CategoryCard from './components/Card/CategoryCard';
import ProductCard from './components/Card/ProductCard';
import ProuductDetailes from './components/ProuductDetailes';
import Dashboard from './views/Dashboard';
import TestEdit from './components/Products/TestEdit';
import EditCategory from './components/Category/EditCategory';
import AddCategory from './components/Category/AddCategory';
import EditProduct from './components/Products/TestEdit';
import AddProduct from './components/Products/AddProduct';
import Cart from './components/Cart';
import Users from './views/Users';





const router = createBrowserRouter([
    {
        // path: '/',
        element: <Guest />,
        children: [
            {
                path: '/login',
                element: <Login />
            },

            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/',
                element: <HomePage />,

            },
        ]
    },



    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" />
            },
            {
                path: '/category',
                element: <CategoryCard />
            },
            {
                path: '/home',
                element: <HomePage />,

            },
            {
                path: '/category/:categoryId/products',
                element: <ProductCard />
            },
            {
                path: '/product/:productId',
                element: <ProuductDetailes />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
            {
                path: '/product/:productId/edit',
                element: <EditProduct />
            },



            {
                path: "/addcategory",
                element: <AddCategory />

            },



            {
                path: "/category/:categoryId/edit",
                element: <EditCategory />

            },


            {
                path: '/addproduct',
                element: <AddProduct />
            },
            {
                path: '/addtocart',
                element: <Cart />
            },


            {
                path: '/user',
                element: <Users />
            }

        ]
    },





    {
        path: '*',
        element: <NotFound />
    },

])

export default router;