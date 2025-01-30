import GridList from "@components/common/GridList/GridList";
import { Tproducts } from "@type/type";
import Product from "@components/eCommerce/Product/Product";
import FullContainer from "@components/common/Container/Container";
import Empty from "@components/common/Empty/Empty";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
const {loading,wishlistFullInfo}= useWishlist()

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
