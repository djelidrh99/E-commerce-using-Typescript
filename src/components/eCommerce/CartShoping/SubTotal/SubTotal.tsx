import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { postPlaceOrdersThunk } from "@store/placeOrders/thunk/postPlaceOrdersThunk";
import { Tproducts } from "@type/type"
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type TtotalProps={
  shopingList:Tproducts[];
  accessToken:string |null

}

const SubTotal = ({shopingList,accessToken}:TtotalProps) => {
  const [show,setShow]=useState(false)
  const items = useAppSelector((state) => state.cart.items);
  const dispatch =useAppDispatch()

  const TotalPrice = shopingList.reduce((ac,current)=>{
   

    return +ac + ((+current.price)*items[current.id])

  },0)

const modalHandler = ()=> {
  setShow(!show)
}

const placeOrdersHandler = ()=>{
  dispatch(postPlaceOrdersThunk(TotalPrice))
  modalHandler()
}
  
 

  
  return (
    <>
        <Modal show={show} onHide={modalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Placing Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to place order with Subtotal:{" "}
        {TotalPrice.toFixed(2)} $
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={placeOrdersHandler}>
            Place Orders
          </Button>
        </Modal.Footer>
      </Modal>
    
    <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",marginTop:"10px",paddingBottom:"20px"}}>
        <h5  style={{fontWeight:"bold",fontSize:"17px"}}>Total</h5>
        <h5 style={{fontWeight:"bold",fontSize:"17px"}}>{TotalPrice.toFixed(0)}$</h5>

    </div>
    {accessToken &&  <div className="d-flex justify-content-end mb-2" >
      
      <Button onClick={modalHandler} variant="primary">Place Orders</Button>
      </div> }
   
    </>
  )
}

export default SubTotal