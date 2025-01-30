import Heading from "@components/common/Heading/Heading";
import SubTotal from "@components/eCommerce/CartShoping/SubTotal/SubTotal";
import Loading from "@components/common/Loading/Loading";
import CartItem from "@components/eCommerce/CartItem/CartItem";
import useCart from "@hooks/useCart";

const Carte = () => {
const {handelQuantity,error,loading,shopingList} = useCart()

 
  return (
    <>
      <Loading status={loading} error={error}>
        <Heading title="Cart"/>

        <CartItem shopingList={shopingList} handelQuantity={handelQuantity}  />

        <SubTotal shopingList={shopingList} />
      </Loading>
    </>
  );
};

export default Carte;
