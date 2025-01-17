import Category from "@components/eCommerce/Category/Category";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import Loading from "@components/common/Loading/Loading";
import { fetchCategories } from "@store/categories/thunk/getCategoriesThunk";
import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@store/Hooks/hooks";

function Categories() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const categoriesList = useAppSelector(
    (state) => state.categories.record
  );
  const loading = useSelector((state: RootState) => state.categories.loading);

  return (
    <Container>
      <Row>
        {loading === "pending" ? (
          <Loading />
        ) : (
          categoriesList.map((item) => {
            return <Category key={item.id} title={item.title} img={item.img} prefix={item.prefix} />;
          })
        )}
      </Row>
    </Container>
  );
}

export default Categories;
