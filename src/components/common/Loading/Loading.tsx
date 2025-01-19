import Lottie from "lottie-react"
import loadinAnimation from '@assets/lottie/animations/loading.json'
import loadinErrorAnimation from '@assets/lottie/animations/loadingError.json'
import style from "./style.module.css";
import { Tloading } from "@type/type";

type TloadingPage ={
  status:Tloading;
  error:null|string;
  children: React.ReactNode
}

const {loadinContainer } = style;

function Loading({status,error,children}:TloadingPage) {

  if (status==="pending") {
    return (
      <div className={loadinContainer}>
          <Lottie animationData={loadinAnimation}/>
        </div>
    )
  }
   if(status==="failed") {
    return (
      <div className={loadinContainer}>
          <Lottie animationData={loadinErrorAnimation}/>
        </div>
    )
  }
  return (
    <>
    {children}
    </>
  )
 
}

export default Loading