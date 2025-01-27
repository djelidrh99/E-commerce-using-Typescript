import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Categories from '@pages/Categories';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Home from '@pages/Home';
import About from '@pages/About';
import MainLayout from '@layouts/mainLayout/MainLayout'
import Error from '@pages/Error';
import Products from '@pages/Product';
import Cart from '@pages/Cart';
import Wishlist from '@pages/Wishlist';



const router = createBrowserRouter([
    {
        path:"/",
    element:<MainLayout/>,
    errorElement:<Error/>,
    children: [

            {
                index:true,
                element: <Home/>
            },
            {
                path:"about",
                element: <About/>
            },
            {
                path:"wishlist",
                element: <Wishlist/>
            },
            {
                path:"cart",
                element: <Cart/>
            },
            {
                path:"categories",
                element: <Categories/>
            },
            {
                path:"login",
                element: <Login/>
            },
            {
                path:"register",
                element: <Register/>
            },
            {
                path:"categories/products/:prefix",
                element: <Products/>,
                loader:({params})=> {
                    if (typeof params.prefix !== "string" || (!(/^[a-z]+$/i).test(params.prefix))) {
                        throw new Response("bad request", {
                        statusText:"page not fund",
                        status:400   
                        })
                    }
                    return true
                }
            }

    ]
    }
]

)

function AppRouter() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter