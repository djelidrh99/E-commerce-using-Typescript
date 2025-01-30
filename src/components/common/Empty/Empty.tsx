
import LottieHandler from '@components/feedback/LottieHandler/LottieHandler'

const Empty = ({section}:{section:string}) => {
  return (
    <LottieHandler type={'empty'} message={`Your ${section} is empty`}/>
  )
}

export default Empty