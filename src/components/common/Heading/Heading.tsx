import { memo } from 'react'
import style from './style.module.css'

const {haedTitle} =style

const Heading = memo(({title}:{title:string}) => {
  console.log("render")
  return (
    <h3 className={haedTitle}>{title}</h3>
  )
})

export default Heading