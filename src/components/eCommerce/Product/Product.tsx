import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { Tproducts } from "@type/type";
import { addProductToCart } from "@store/Cart/carteSlice";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import LikeFill from "@assets/svg/like.svg?react";
import Like from "@assets/svg/like-fill.svg?react";
import { getToggleLike } from "@store/Wishlist/thunk/getToggleLike";

const { imageContainer, boxContainer, likedContainer } = style;

const Product = ({ title, img, price, id, max, isLiked }: Tproducts) => {
  console.log("render");
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const [isButtonClicked, setButtonIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const buttonSetTime = setTimeout(() => {
      setButtonIsClicked(false);
    }, 300);

    return () => clearInterval(buttonSetTime);
  }, [isButtonClicked]);

  const handlerAddToCart = () => {
    dispatch(addProductToCart(id));
    setButtonIsClicked(true);
  };

  const handleLike = (index: number) => {
    setIsLoading(true);
    if (isLoading) {
      return;
    }

    dispatch(getToggleLike(index)).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className={boxContainer}>
      <div className={imageContainer}>
        <img title={title} src={img} alt={title} />
        <div
          className={likedContainer}
          onClick={() => {
            handleLike(id);
          }}
        >
          {isLoading ? (
            <Spinner animation="border" size="sm" />
          ) : isLiked ? (
            <Like />
          ) : (
            <LikeFill />
          )}
        </div>
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
