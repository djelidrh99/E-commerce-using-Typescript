import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { fetchWishlist } from "@store/Wishlist/thunk/getWishlistThunk";
import { useEffect } from "react";
import { wishlistCleanUp } from "@store/Wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistItem = useAppSelector((state) => state.wishlist.wishlistItems);
  const {accessToken}= useAppSelector(state=>state.auth)
  const wishlistPoduct = useAppSelector(
    (state) => state.wishlist.productFullInfo
  );
  const {loading,error} = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    
      const promise = dispatch(fetchWishlist("productFullInfo"));
    
    return () => {
      dispatch(wishlistCleanUp());
      promise.abort()
    };
  }, [dispatch,accessToken]);

  const wishlistFullInfo = wishlistPoduct.map((item) => {
    return { ...item, isLiked: wishlistItem.includes(item.id) };
  });

  return { loading, wishlistFullInfo,error };
};

export default useWishlist;
