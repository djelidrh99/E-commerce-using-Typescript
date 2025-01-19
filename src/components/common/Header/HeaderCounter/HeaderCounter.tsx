import style from "./style.module.css"

const {container,CartCounter,iconWrraper}=style

type HeaderCounterType ={
title:string;
iconSvg:React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
count?:number
}


export default function HeaderCounter({title,iconSvg,count}:HeaderCounterType) {
  return (
    <div className={container}>
        <div className={iconWrraper}>
         {iconSvg({})}
         <div  className={CartCounter} >{count}</div>
        </div>
        <h3>{title}</h3>
    </div>
  )
}
