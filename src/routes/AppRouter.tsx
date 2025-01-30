import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@layouts/mainLayout/MainLayout';
const Categories= lazy(()=>import('@pages/Categories')) 
const Login= lazy(()=>import('@pages/Login')) 
const Register= lazy(()=>import('@pages/Register')) 
const Home= lazy(()=>import('@pages/Home')) 
const About= lazy(()=>import('@pages/About')) 
const Products= lazy(()=>import('@pages/Products')) 
const Cart= lazy(()=>import('@pages/Cart')) 
const Wishlist= lazy(()=>import('@pages/Wishlist')) 
import Error from '@pages/Error';
import SuspenceComponent from '@components/common/SuspenceComponent/SuspenceComponent';






const router = createBrowserRouter([
    {
        path:"/",
    element: <MainLayout/>, 
    errorElement:<Error/>,
    children: [

            {
                index:true,
                element: <Suspense fallback={<SuspenceComponent/>}><Home/></Suspense>
            },
            {
                path:"about",
                element: <Suspense fallback={<SuspenceComponent/>}><About/></Suspense>
            },
            {
                path:"wishlist",
                element: <Suspense fallback={<SuspenceComponent/>}><Wishlist/></Suspense>
            },
            {
                path:"cart",
                element: <Suspense fallback={<SuspenceComponent/>}><Cart/></Suspense>
            },
            {
                path:"categories",
                element: <Suspense fallback={<SuspenceComponent/>}><Categories/></Suspense>
            },
            {
                path:"login",
                element: <Suspense fallback={<SuspenceComponent/>}><Login/></Suspense>
            },
            {
                path:"register",
                element: <Suspense fallback={<SuspenceComponent/>}><Register/></Suspense>
            },
            {
                path:"categories/products/:prefix",
                element: <Suspense fallback={<SuspenceComponent/>}><Products/></Suspense>,
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