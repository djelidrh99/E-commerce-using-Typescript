import GridList from "@components/common/GridList/GridList";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { fetchWishlist } from "@store/Wishlist/thunk/getWishlistThunk";
import { Tproducts } from "@type/type";
import { useEffect } from "react";
import Product from "@components/eCommerce/Product/Product";
import FullContainer from "@components/common/Container/Container";
import Empty from "@components/common/Empty/Empty";

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistItem =useAppSelector(state=>state.wishlist.wishlistItems)
  const wishlistPoduct = useAppSelector(
    (state) => state.wishlist.productFullInfo
  );
  const loading = useAppSelector((state) => state.wishlist.loading);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const wishlistFullInfo= wishlistPoduct.map((item)=>{
    return {...item,isLiked:wishlistItem.includes(item.id)}
  })

  return (
    <FullContainer headingTitle={"Whishlist"} loading={loading} error={null}>
      {wishlistFullInfo.length === 0 ? (
        <Empty section={"Wishlist"} />
      ) : (
        <GridList
          records={wishlistFullInfo}
          callBackFunc={(item: Tproducts) => (
            <Product
              title={item.title}
              img={item.img}
              id={item.id}
              price={item.price}
              isLiked={item.isLiked}
            />
          )}
        />
      )}
    </FullContainer>
  );
};

export default Wishlist;
