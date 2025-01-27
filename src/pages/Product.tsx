import Product from "@components/eCommerce/Product/Product";
import { fetchProducts } from "@store/products/thunk/getProductssThunk";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@store/Hooks/hooks";
import { useAppSelector } from "@store/Hooks/hooks";
import { useLocation, useParams } from "react-router-dom";
import { productsCleanUp } from "@store/products/productsSlice";
import GridList from "@components/common/GridList/GridList";
import { Tproducts } from "@type/type";
import FullContainer from "@components/common/Container/Container";
const Products = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const ProductList = useAppSelector((state) => state.products.record);
  const loading = useAppSelector((state) => state.products.loading);
  const wishlistItem =useAppSelector(state=>state.wishlist.wishlistItems)
  const params = useParams();

  useEffect(() => {
    dispatch(fetchProducts());
    return () => {
      dispatch(productsCleanUp());
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

  return (
    <FullContainer
      headingTitle={`${params.prefix}'s Products`}
      loading={loading}
      error={null}
    >
      <GridList
        records={productFullInfo}
        callBackFunc={(item: Tproducts) => (
          <Product
            title={item.title}
            img={item.img}
            id={item.id}
            price={item.price}
            max={item.max}
            isLiked={item.isLiked}
          />
        )}
      />
    </FullContainer>
  );
};

export default Products;
