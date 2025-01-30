import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Categories= lazy(()=>import('@pages/Categories')) 
const Login= lazy(()=>import('@pages/Login')) 
const Register= lazy(()=>import('@pages/Register')) 
const Home= lazy(()=>import('@pages/Home')) 
const About= lazy(()=>import('@pages/About')) 
const MainLayout= lazy(()=>import('@layouts/mainLayout/MainLayout')) 
const Error= lazy(()=>import('@pages/Error')) 
const Products= lazy(()=>import('@pages/Products')) 
const Cart= lazy(()=>import('@pages/Cart')) 
const Wishlist= lazy(()=>import('@pages/Wishlist')) 






const router = createBrowserRouter([
    {
        path:"/",
    element: <Suspense fallback={<div>Loading</div>}><MainLayout/></Suspense>, 
    errorElement:<Suspense><Error/></Suspense>,
    children: [

            {
                index:true,
                element: <Suspense fallback={<div>Loading</div>}><Home/></Suspense>
            },
            {
                path:"about",
                element: <Suspense fallback={<div>Loading</div>}><About/></Suspense>
            },
            {
                path:"wishlist",
                element: <Suspense fallback={<div>Loading</div>}><Wishlist/></Suspense>
            },
            {
                path:"cart",
                element: <Suspense fallback={<div>Loading</div>}><Cart/></Suspense>
            },
            {
                path:"categories",
                element: <Suspense fallback={<div>Loading</div>}><Categories/></Suspense>
            },
            {
                path:"login",
                element: <Suspense fallback={<div>Loading</div>}><Login/></Suspense>
            },
            {
                path:"register",
                element: <Suspense fallback={<div>Loading</div>}><Register/></Suspense>
            },
            {
                path:"categories/products/:prefix",
                element: <Suspense fallback={<div>Loading</div>}><Products/></Suspense>,
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