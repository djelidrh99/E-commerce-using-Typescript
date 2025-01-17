import Lottie from "lottie-react"
import loadinAnimation from '@assets/lottie/animations/loading.json'
import style from "./style.module.css";


const {loadinContainer } = style;

function Loading() {
  return (
    <div className={loadinContainer}>
        <Lottie animationData={loadinAnimation}/>
      </div>
  )
}

export default Loading