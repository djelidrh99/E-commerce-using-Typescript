import style from './style.module.css'

const {haedTitle} =style

const Heading = ({children}:{children:React.ReactNode}) => {
  return (
    <h3 className={haedTitle}>{children}</h3>
  )
}

export default Heading