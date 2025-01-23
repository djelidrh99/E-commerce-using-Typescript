import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { Tproducts } from "@type/type";
import { addProductToCart } from "@store/Cart/carteSlice";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { useEffect, useMemo, useState } from "react";
import { Spinner } from "react-bootstrap";
import dislike from "@assets/svg/like.svg";
import like from "@assets/svg/like-fill.svg";
import {
  addProductTowishlist,
  deleteProductFromwishlist,
} from "@store/Wishlist/wishlistSlice";

const { imageContainer, boxContainer } = style;

const Product = ({ title, img, price, id, max }: Tproducts) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const whishlist = useAppSelector((state) => state.wishlist.wishlistItems);
  const [isButtonClicked, setButtonIsClicked] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const buttonSetTime = setTimeout(() => {
      setButtonIsClicked(false);
    }, 300);

    return () => clearInterval(buttonSetTime);
  }, [isButtonClicked]);

  useEffect(() => {
    checkLikeList(id);
  }, []);

  const checkLikeList = (index: number) => {
     (whishlist.includes(index)) ? setIsLiked(true) : setIsLiked(false)
      
  };

  const handlerAddToCart = () => {
    dispatch(addProductToCart(id));
    setButtonIsClicked(true);
  };

  const handleLike = (index: number) => {
    setIsLiked((prev) => !prev);
    isLiked ? dispatch(deleteProductFromwishlist(index)) : dispatch(addProductTowishlist(index))

  };

  return (
    <div className={boxContainer}>
      <div className={imageContainer}>
        <img title={title} src={img} alt={title} />
        {isLiked ? (
          <img
            onClick={() => {
              handleLike(id);
            }}
            src={like}
            alt={like}
          />
        ) : (
          <img
            onClick={() => {
              handleLike(id);
            }}
            src={dislike}
            alt={dislike}
          />
        )}
      </div>
      <h5>{title}</h5>
      <h6>{price}</h6>
      <Button
        onClick={handlerAddToCart}
        disabled={isButtonClicked || items[id] >= (max as number)}
        variant="primary"
      >
        {isButtonClicked ? (
          <>
            <Spinner
              style={{ marginRight: "5px" }}
              animation="border"
              size="sm"
            />
            Loading...{" "}
          </>
        ) : (
          "Add To Cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
