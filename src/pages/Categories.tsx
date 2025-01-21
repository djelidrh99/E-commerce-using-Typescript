import Category from "@components/eCommerce/Category/Category";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import Loading from "@components/common/Loading/Loading";
import { fetchCategories } from "@store/categories/thunk/getCategoriesThunk";
import { useEffect } from "react";
import { useAppDispatch,useAppSelector } from "@store/Hooks/hooks";
import GridList from "@components/common/GridList/GridList";
import { Tcategories } from "@type/type";
import Heading from "@components/common/Heading/Heading";

function Categories() {
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector(
    (state) => state.categories.record
  );
  const loading = useSelector((state: RootState) => state.categories.loading);

  useEffect(() => {
    if(categoriesList.length===0) {
      dispatch(fetchCategories());
    }
    
  }, [dispatch,categoriesList]);

  

  return (
    <Container>
      <Heading>Categories</Heading>
            <Loading status={loading} error={null}>
      <Row>
      
        <GridList records={categoriesList} callBackFunc={(item: Tcategories)=> <Category   title={item.title} img={item.img} prefix={item.prefix} />}/>
      </Row>
      </Loading>
    </Container>
  );
}

export default Categories;
