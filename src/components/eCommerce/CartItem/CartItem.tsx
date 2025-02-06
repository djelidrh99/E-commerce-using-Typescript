import { Tproducts } from "@type/type";
import CartShoping from "../CartShoping/CartShoping";
import Empty from "@components/common/Empty/Empty";
import LottieHandler from "@components/feedback/LottieHandler/LottieHandler";

type TshopingCart = { shopingList: Tproducts[]; placeOrderStatus?: string };
const CartItem = ({
  shopingList,
  handelQuantity,
  placeOrderStatus,
}: TshopingCart & {
  handelQuantity: (e: React.ChangeEvent<HTMLSelectElement>, id: number) => void;
}) => {
  return (
    <>
      {shopingList.length === 0 && placeOrderStatus !== "succeeded" ? (
        <Empty section={"Cart"} />
      ) : placeOrderStatus === "succeeded" ? (
        <LottieHandler
          type={"success"}
          message={`Your Order has been placed successfuly`}
        />
      ) : (
        shopingList.map((item) => {
          return (
            <CartShoping
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              handelQuantity={handelQuantity}
            />
          );
        })
      )}
    </>
  );
};

export default CartItem;
