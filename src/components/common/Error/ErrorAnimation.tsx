import Lottie from "lottie-react"
import style from './style.module.css'
import { Link} from "react-router-dom"
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler"

const {errorContainer}=style


function ErrorAnimation() {
 
    
  return (
    <div className={errorContainer}>
        {/* <Lottie  style={{width:"50%"}}  animationData={errorAnimation}/> */}
        <LottieHandler type="notFund"/>
        
        <Link to={"/"} replace >How about going back to safety?</Link>    
    </div>
  )
}

export default ErrorAnimation