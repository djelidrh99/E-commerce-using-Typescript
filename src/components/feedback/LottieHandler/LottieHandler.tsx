import Lottie from "lottie-react"
import style from './style.module.css'
import empty from '@assets/lottie/animations/empty.json'  
import error from '@assets/lottie/animations/loadingError.json'
import loading from '@assets/lottie/animations/loading.json'
import notFund from '@assets/lottie/animations/error.json'


const {Container,lottieContainer} = style

const lottieAnimation = {
    empty: empty,
    error: error,
    loading:loading,
    notFund: notFund
}

type TLottieHandlerProps = {
    type : keyof typeof lottieAnimation,
    message ?: string
}


const LottieHandler = ({type,message}:TLottieHandlerProps) => {
  
  return (
    <div className={Container}>

          <div className={lottieContainer}><Lottie  style={{width:"70%"}}  animationData={lottieAnimation[type]}/></div>
          {message && <div>{message}</div>} 
        </div>
  )
}

export default LottieHandler