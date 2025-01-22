import { useAppSelector } from "@store/Hooks/hooks";
import { Tproducts } from "@type/type"

type TtotalProps={shopingList:Tproducts[]}

const SubTotal = ({shopingList}:TtotalProps) => {

  const items = useAppSelector((state) => state.cart.items);

  const TotalPrice = shopingList.reduce((ac,current)=>{
   

    return +ac + ((+current.price)*items[current.id])

  },0)

  
  return (
    <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",marginTop:"10px",paddingBottom:"40px"}}>
        <h5  style={{fontWeight:"bold",fontSize:"17px"}}>Total</h5>
        <h5 style={{fontWeight:"bold",fontSize:"17px"}}>{TotalPrice}</h5>

    </div>
  )
}

export default SubTotal