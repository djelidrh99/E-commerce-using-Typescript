import { Container, Row } from "react-bootstrap";
import Product from "@components/eCommerce/Product/Product";
import { fetchProducts } from "@store/products/thunk/getProductssThunk";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@store/Hooks/hooks";
import { useAppSelector } from "@store/Hooks/hooks";
import { useLocation } from "react-router-dom";
import Loading from "@components/common/Loading/Loading";
import { productsCleanUp } from "@store/products/productsSlice";
import GridList from "@components/common/GridList/GridList";
import { Tproducts } from "@type/type";
import { addProductToCart } from "@store/Cart/carteSlice";
function Products() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const ProductList = useAppSelector((state) => state.products.record);
  const loading = useAppSelector((state) => state.products.loading);
  

  console.log(location.pathname);

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


  return (
    <Container>
      <Loading status={loading} error={null}>
        <Row>
        <GridList records={ProductByPrefix} callBackFunc={(item: Tproducts)=> <Product   title={item.title} img={item.img} id={item.id} price={item.price}   />}/>

        </Row>
      </Loading>
    </Container>
  );
}

export default Products;
