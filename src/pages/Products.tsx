import Product from "@components/eCommerce/Product/Product";
import GridList from "@components/common/GridList/GridList";
import { Tproducts } from "@type/type";
import FullContainer from "@components/common/Container/Container";
import useProducts from "@hooks/useProducts";

const Products = () => {

  const {loading,productFullInfo,productsCategories,error}=useProducts()

  return (
    <FullContainer
      headingTitle={`${productsCategories}'s Products`}
      loading={loading}
      error={error}
      type="products"
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
