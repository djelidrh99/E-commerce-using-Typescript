import { Container, Row } from "react-bootstrap";
import Product from "@components/eCommerce/Product/Product";
import { fetchProducts } from "@store/products/thunk/getProductssThunk";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@store/Hooks/hooks";
import { useAppSelector } from "@store/Hooks/hooks";
import { useLocation } from "react-router-dom";
import Loading from "@components/common/Loading/Loading";
function Products() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const ProductList = useAppSelector((state) => state.products.record);
  const loading = useAppSelector((state) => state.products.loading);

  console.log(location.pathname);

  useEffect(() => {
    dispatch(fetchProducts());
    return ()=> { 
      
      }
  }, [dispatch]);

  let ProductByPrefix = useMemo(()=>{
    return ProductList.filter(
      (item) => `/categories/products/${item.cat_prefix}` === location.pathname
    );
  
  },[location.pathname,ProductList]) 
  return (
    <Container>
      <Row>
        {loading === "pending" ? (
          <Loading />
        ) : (
          ProductByPrefix.map((item) => (
            <Product
              key={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              id={item.id}
            />
          ))
        )}
      </Row>
    </Container>
  );
}

export default Products;
