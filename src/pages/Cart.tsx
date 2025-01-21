import Heading from '@components/common/Heading/Heading'
import CartShoping from '@components/eCommerce/CartShoping/CartShoping'
import SubTotal from '@components/eCommerce/CartShoping/SubTotal/SubTotal'
import { Container, Row } from 'react-bootstrap'
import { fetchShopingCart } from '@store/Cart/thunk/getShopingCartThunk'
import { useAppDispatch, useAppSelector } from '@store/Hooks/hooks'
import { useEffect } from 'react'
import Loading from '@components/common/Loading/Loading'

const Carte = () => {
  const dispatch = useAppDispatch()
  const shopingList =useAppSelector(state=>state.cart.productFullInfo)
  const loading =useAppSelector(state=>state.cart.loading)
  const error =useAppSelector(state=>state.cart.error)
 

  useEffect(()=>{

    dispatch(fetchShopingCart())
  },[dispatch])

  return (
    <Container style={{paddingBottom:"80px"}}>
      <Loading status={loading} error={error} >

      
        <Heading>Cart</Heading>
        {shopingList.map((item)=>{
          return (
            <CartShoping key={item.id} id={item.id} title={item.title} img={item.img} price={item.price} />
          )
        })}
        
        
        <SubTotal/>
        </Loading>
    </Container>
  )
}

export default Carte