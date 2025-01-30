import { Tloading } from "@type/type";
import CategoriesSkeleton from "@components/feedback/Skeleton/CategoriesSkeleton";
import CartSkeleton from "@components/feedback/Skeleton/CartSkeleton";
import ProductsSkeleton from "@components/feedback/Skeleton/ProductsSkeleton";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";


const skeletonTypes = {
  categories: CategoriesSkeleton,
  products: ProductsSkeleton,
  cart: CartSkeleton
}

type TloadingPage ={
  status:Tloading;
  error:null|string;
  children: React.ReactNode,
  type: keyof typeof skeletonTypes
}





function Loading({status,error,children,type}:TloadingPage) {

  const SkeleltonComponent = skeletonTypes[type]

  if (status==="pending") {
    return (

     <SkeleltonComponent/>

  
    )
  }
   if(status==="failed") {
    console.log(error)
    return (
      <LottieHandler type={"error"} message={error as string} />
    )
  }
  return (
    <>
    {children}
    </>
  )
 
}

export default Loading