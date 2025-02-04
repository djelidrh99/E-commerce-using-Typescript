import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { Tproducts } from "@type/type";
import { addProductToCart } from "@store/Cart/carteSlice";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { memo, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import LikeFill from "@assets/svg/like.svg?react";
import Like from "@assets/svg/like-fill.svg?react";
import { getToggleLike } from "@store/Wishlist/thunk/getToggleLike";
import ProductInfo from "../ProductInfo/ProductInfo";

const { imageContainer, boxContainer, likedContainer } = style;

const Product = memo(({ title, img, price, id, max, isLiked }: Tproducts) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const [isButtonClicked, setButtonIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {accessToken}=useAppSelector(state=>state.auth)

  useEffect(() => {
    const buttonSetTime = setTimeout(() => {
      setButtonIsClicked(false);
    }, 300);

    return () => clearInterval(buttonSetTime);
  }, [isButtonClicked]);

  const handlerAddToCart = (index: number) => {
    dispatch(addProductToCart(index));
    setButtonIsClicked(true);
  };

  const handleLike = (index: number) => {
    setIsLoading(true);
    if (isLoading) {
      return;
    }

    dispatch(getToggleLike(index)).then(() => {
      setIsLoading(false);
    }).catch(()=>{
      setIsLoading(false)
    });
  };

  return (
    <div className={boxContainer}>
      <ProductInfo title={title} img={img} price={price} direction="column" >
      {accessToken && 
        <div
          className={likedContainer}
          onClick={() => {
            handleLike(id);
          }}
        >
          {isLoading ? (
            <Spinner animation="border" size="sm" variant="primary"/>
          ) : isLiked ? (
            <Like />
          ) : (
            <LikeFill />
          )}
        </div> }
      <Button
        onClick={() => {
          handlerAddToCart(id);
        }}
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
     
      </ProductInfo>
    </div>
  );
});

export default Product;
