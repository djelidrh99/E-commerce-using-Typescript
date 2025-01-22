import { Tproducts } from "@type/type";
import CartShoping from "../CartShoping/CartShoping";

type TshopingCart = { shopingList: Tproducts[] };
const CartItem = ({
  shopingList,
  handelQuantity,
}: TshopingCart & {
  handelQuantity: (e: React.ChangeEvent<HTMLSelectElement>, id: number) => void;
}) => {
  return (
    <>
      {shopingList.length === 0 ? (
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          No Product in Shoping Cart
        </div>
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
