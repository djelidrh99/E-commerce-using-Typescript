import { Button } from 'react-bootstrap'
import style from './style.module.css'
import { Tproducts } from '@type/type'
import { addProductToCart } from '@store/Cart/carteSlice'
import { useAppDispatch } from '@store/Hooks/hooks'

const {imageContainer,boxContainer} = style





function Product({title,img,price,id}:Tproducts) {
  const dispatch =useAppDispatch()


  
  const handlerAddToCart = ()=>{
    dispatch(addProductToCart(id))
  }


  return (

    
        <div className={boxContainer}>
          
        <div className={imageContainer}>
        <img title={title} src={img} alt={title} />
        </div>
        <h5>{title}</h5>
        <h6>{price}</h6>
        <Button onClick={handlerAddToCart} variant="primary">Add To Cart</Button>
        
        </div>
      
  )
}

export default Product