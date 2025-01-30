import Category from "@components/eCommerce/Category/Category";
import GridList from "@components/common/GridList/GridList";
import { Tcategories } from "@type/type";
import FullContainer from "@components/common/Container/Container";
import useCategories from "@hooks/useCategories";

function Categories() {
const {categoriesList,loading}=useCategories()

  return (
    <FullContainer headingTitle={`Categories`} loading={loading} error={null}>
      <GridList
        records={categoriesList}
        callBackFunc={(item: Tcategories) => (
          <Category title={item.title} img={item.img} prefix={item.prefix} />
        )}
      />
    </FullContainer>
  );
}

export default Categories;
