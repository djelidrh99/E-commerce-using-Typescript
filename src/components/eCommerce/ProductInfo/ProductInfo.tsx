import styles from  "./style.module.css"

type TProductInfoProps= {
    title:string;
    img:string;
    price:string;
    direction?: "row" | "column"
    children?:React.ReactNode
    style?:React.CSSProperties

}


const ProductInfo = ({title,img,price,direction,children,style}:TProductInfoProps) => {
  return (
    
        <div  className={`${styles[`product-${direction}`]}`} style={style}>
          <div className={`${styles[`imgContainer-${direction}`]}`}>
            <img src={img} alt={title} />
          </div>
          <div>
            <h5>{title}</h5>
            <h6>{price}</h6>
            
             {children}
            
          </div>
        </div>
        
  )
}

export default ProductInfo