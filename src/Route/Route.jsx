import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../Layouts/DashBoardLayout';
import MainLayout from '../Layouts/MainLayout';
import About from '../Pages/About/About';
import DashBoard from '../Pages/DashBoard/DashBoard';
import EditProfile from '../Pages/EditProfile/EditProfile';
import Home from '../Pages/Home/Home';
import Products from '../Pages/Products/Products';
import Profile from '../Pages/Profile/Profile';
import Product from '../Pages/Sproduct/Product';

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children : [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: '/products/:id',
                element: <Product></Product>,
                loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/dashboard',
                element:  <DashBoardLayout></DashBoardLayout>,
                children : [
                    {
                        path: '/dashboard',
                        element:<DashBoard></DashBoard>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <Profile></Profile>
                    },
                    {
                        path: '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
            }
        ]
    }
])

export default myCreatedRoute;