import Lottie from "lottie-react"
import errorAnimation from '@assets/lottie/animations/error.json'
import style from './style.module.css'
const {errorContainer}=style
import { Link, useRouteError,isRouteErrorResponse} from "react-router-dom"



function ErrorAnimation() {
    const error=  useRouteError()
    let statusMessage;
    
    if(isRouteErrorResponse(error)) {
        statusMessage=error.statusText
    }else {
        statusMessage="Page not Found"
    }
    
  return (
    <div className={errorContainer}>
        <Lottie  style={{width:"50%"}}  animationData={errorAnimation}/>
        <h3>{statusMessage}</h3>
        <Link to={"/"} replace >How about going back to safety?</Link>    
    </div>
  )
}

export default ErrorAnimation