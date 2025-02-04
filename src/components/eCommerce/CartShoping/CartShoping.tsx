import { Tproducts } from "@type/type";
import style from "./style.module.css";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import {
  deleteProductFromShopingCart,
} from "@store/Cart/carteSlice";
import { memo } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";

const { shopingContainer, removeButton, leftSide, imgContainer } = style;

const CartShoping = memo(
  ({
    id,
    title,
    price,
    img,
    handelQuantity,
  }: Tproducts & {
    handelQuantity: (
      e: React.ChangeEvent<HTMLSelectElement>,
      id: number
    ) => void;
  }) => {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();

    const handelDelete = (index: number) => {
      dispatch(deleteProductFromShopingCart(index));
    };

    return (
      <div className={shopingContainer}>
        <ProductInfo title={title} img={img} price={price} direction="row">
          <div style={{flexGrow:1}}></div>
        

            <Button
              onClick={() => {
                handelDelete(id);
              }}
              variant="secondary"
              className={removeButton}
            >
              Remove
            </Button>
          
        </ProductInfo>

        <div>
          <h5>Quantity</h5>
          <Form.Select
            onChange={(e) => {
              handelQuantity(e, id);
            }}
            defaultValue={items[id]}
            aria-label="Default select example"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </Form.Select>
        </div>
      </div>
    );
  }
);

export default CartShoping;
