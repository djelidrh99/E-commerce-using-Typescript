import Heading from "@components/common/Heading/Heading";
import SubTotal from "@components/eCommerce/CartShoping/SubTotal/SubTotal";
import { fetchShopingCart } from "@store/Cart/thunk/getShopingCartThunk";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import {useCallback, useEffect } from "react";
import Loading from "@components/common/Loading/Loading";
import CartItem from "@components/eCommerce/CartItem/CartItem";
import { updateItems } from "@store/Cart/carteSlice";

const Carte = () => {
  const dispatch = useAppDispatch();
  const shopingList = useAppSelector((state) => state.cart.productFullInfo);
  const loading = useAppSelector((state) => state.cart.loading);
  const error = useAppSelector((state) => state.cart.error);

  useEffect(() => {
    dispatch(fetchShopingCart());
  }, [dispatch]);

  const handelQuantity = useCallback((e:React.ChangeEvent<HTMLSelectElement>,id:number) => {
    const newCount = e.target.value;
    dispatch(updateItems({ id, newCount }));
  },[dispatch])

 
  return (
    <>
      <Loading status={loading} error={error}>
        <Heading>Cart</Heading>

        <CartItem shopingList={shopingList} handelQuantity={handelQuantity}  />

        <SubTotal shopingList={shopingList} />
      </Loading>
    </>
  );
};

export default Carte;
