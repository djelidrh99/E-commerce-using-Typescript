import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { fetchWishlist } from "@store/Wishlist/thunk/getWishlistThunk";
import { useEffect } from "react";
import { wishlistCleanUp } from "@store/Wishlist/wishlistSlice";

const useWishlist = () => {
  const dispatch = useAppDispatch();
  const wishlistItem = useAppSelector((state) => state.wishlist.wishlistItems);
  const wishlistPoduct = useAppSelector(
    (state) => state.wishlist.productFullInfo
  );
  const loading = useAppSelector((state) => state.wishlist.loading);

  useEffect(() => {
    const promise = dispatch(fetchWishlist());
    return () => {
      dispatch(wishlistCleanUp());
      promise.abort()
    };
  }, [dispatch]);

  const wishlistFullInfo = wishlistPoduct.map((item) => {
    return { ...item, isLiked: wishlistItem.includes(item.id) };
  });

  return { loading, wishlistFullInfo };
};

export default useWishlist;
