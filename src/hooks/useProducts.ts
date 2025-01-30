import { fetchProducts } from "@store/products/thunk/getProductssThunk";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@store/Hooks/hooks";
import { useAppSelector } from "@store/Hooks/hooks";
import { useLocation, useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlice";

const useProducts = () => {
    const dispatch = useAppDispatch();
  const location = useLocation();
  const ProductList = useAppSelector((state) => state.products.record);
  const loading = useAppSelector((state) => state.products.loading);
  const wishlistItem =useAppSelector(state=>state.wishlist.wishlistItems)
  const params = useParams();
  const productsCategories = params.prefix

  useEffect(() => {
    const promise = dispatch(fetchProducts());
    return () => {
      dispatch(productsCleanUp());
      promise.abort()

    };
  }, [dispatch, location.pathname]);

  const ProductByPrefix = useMemo(() => {
    return ProductList.filter(
      (item) => `/categories/products/${item.cat_prefix}` === location.pathname
    );
  }, [location.pathname, ProductList]);

  const productFullInfo= ProductByPrefix.map((item)=>{
    return {...item,isLiked:wishlistItem.includes(item.id)}
  })
  
    return {loading,productFullInfo,productsCategories}
}

export default useProducts