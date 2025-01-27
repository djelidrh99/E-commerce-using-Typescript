import Category from "@components/eCommerce/Category/Category";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { fetchCategories } from "@store/categories/thunk/getCategoriesThunk";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import GridList from "@components/common/GridList/GridList";
import { Tcategories } from "@type/type";
import FullContainer from "@components/common/Container/Container";

function Categories() {
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.categories.record);
  const loading = useSelector((state: RootState) => state.categories.loading);

  useEffect(() => {
    if (categoriesList.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch, categoriesList]);

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
