import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "../../../../assets/svg/wishlist.svg?react"
import CartIcon from "../../../../assets/svg/cart.svg?react"
import style from "./style.module.css"
import { useAppSelector } from "@store/Hooks/hooks";
import { getTotalCountSelector } from "@store/Cart/CreateSelector/CartSelector";

const {container}=style

export default function HeaderLeftBar() {
  const count = useAppSelector(getTotalCountSelector)

 
  return (
    <div className={container}>
        <HeaderCounter title={"wishlist"} iconSvg={WishlistIcon}/>
        <HeaderCounter count={count} title={"Cart"} iconSvg={CartIcon}/>

    </div>

  )
}
