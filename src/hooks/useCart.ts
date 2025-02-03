import { fetchShopingCart } from "@store/Cart/thunk/getShopingCartThunk";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { useCallback, useEffect } from "react";
import { cartProductsCleanUp, updateItems } from "@store/Cart/carteSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const shopingList = useAppSelector((state) => state.cart.CartProductFullInfo);
  const loading = useAppSelector((state) => state.cart.loading);
  const error = useAppSelector((state) => state.cart.error);

  useEffect(() => {
    const promise =dispatch(fetchShopingCart());
    return () => {
      dispatch(cartProductsCleanUp());
      promise.abort()

    };
  }, [dispatch]);

  const handelQuantity = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>, id: number) => {
      const newCount = e.target.value;
      dispatch(updateItems({ id, newCount }));
    },
    [dispatch]
  );

  return { loading, error, shopingList, handelQuantity };
};

export default useCart;
