import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "../../../../assets/svg/wishlist.svg?react"
import CartIcon from "../../../../assets/svg/cart.svg?react"
import style from "./style.module.css"
import { useAppSelector } from "@store/Hooks/hooks";
import { getTotalCountSelector } from "@store/Cart/CreateSelector/CartSelector";
import {useNavigate} from 'react-router-dom';


const {container}=style

export default function HeaderLeftBar() {
  const count = useAppSelector(getTotalCountSelector)
  const navigate =useNavigate()
  const navToCart= ()=>{
     navigate("cart")
  }
  

 
  return (
    <div className={container}>
        <HeaderCounter title={"wishlist"} iconSvg={WishlistIcon}/>
        
        <HeaderCounter navTo={navToCart}  count={count} title={"Cart"} iconSvg={CartIcon}/>
        
        

    </div>

  )
}
