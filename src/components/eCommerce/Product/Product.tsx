import { Button } from 'react-bootstrap'
import style from './style.module.css'
import { Tproducts } from '@type/type'
import { addProductToCart } from '@store/Cart/carteSlice'
import { useAppDispatch, useAppSelector } from '@store/Hooks/hooks'
import { memo, useEffect, useState } from 'react'
import {Spinner} from 'react-bootstrap'

const {imageContainer,boxContainer} = style





const  Product = ({title,img,price,id,max}:Tproducts) => {
  const dispatch =useAppDispatch()
  const [isButtonClicked ,setButtonIsClicked]=useState(false)
  const items = useAppSelector((state)=>state.cart.items)


useEffect(()=>{
   const buttonSetTime= setTimeout(()=>{
   setButtonIsClicked(false)
   },300)

   return ()=> clearInterval(buttonSetTime)


},[isButtonClicked])



  
  const handlerAddToCart = ()=>{
  
      dispatch(addProductToCart(id))
    setButtonIsClicked(true)

    
    
    
    
  }


  return (

    
        <div className={boxContainer}>
          
        <div className={imageContainer}>
        <img title={title} src={img} alt={title} />
        </div>
        <h5>{title}</h5>
        <h6>{price}</h6>
        <Button onClick={handlerAddToCart} disabled={isButtonClicked || items[id]>= max } variant="primary">
          {isButtonClicked?<><Spinner style={{marginRight:"5px"}} animation='border' size="sm" />Loading... </>:"Add To Cart"}
          </Button>
        
        </div>
      
  )
}

export default Product