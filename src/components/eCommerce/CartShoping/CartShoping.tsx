import { Tproducts } from "@type/type";
import style from "./style.module.css";
import { Button, Form } from "react-bootstrap";
import { useAppSelector } from "@store/Hooks/hooks";
const { shopingContainer, removeButton, leftSide, imgContainer } = style;


const CartShoping = ({id,title,price,img}:Tproducts) => {
  const items =useAppSelector(state=>state.cart.items)
  return (
    <div className={shopingContainer}>
      <div className={leftSide}>
        <div className={imgContainer}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <div>
          <h5>{title}</h5>
          <h6>{price}</h6>
          <div style={{ flexGrow: 1 }}></div>

          <Button variant="secondary" className={removeButton}>
            Remove
          </Button>
        </div>
      </div>

      <div>
        <h5>Quantity</h5>
        <Form.Select defaultValue={items[id]} aria-label="Default select example">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>

        </Form.Select>
      </div>
    </div>
  );
};

export default CartShoping;
