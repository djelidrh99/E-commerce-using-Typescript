import HeaderCounter from "../HeaderCounter/HeaderCounter";
import WishlistIcon from "../../../../assets/svg/wishlist.svg?react"
import CartIcon from "../../../../assets/svg/cart.svg?react"
import style from "./style.module.css"

const {container}=style

export default function HeaderLeftBar() {
  return (
    <div className={container}>
        <HeaderCounter title={"wishlist"} iconSvg={WishlistIcon}/>
        <HeaderCounter title={"Cart"} iconSvg={CartIcon}/>

    </div>

  )
}
