import { useEffect } from "react";
import { fetchCategories } from "@store/categories/thunk/getCategoriesThunk";
import { useAppDispatch, useAppSelector } from "@store/Hooks/hooks";
import { categoriesCleanUp } from "@store/categories/categoriesSlice";

const useCategories = () => {
  const dispatch = useAppDispatch();
  const categoriesList = useAppSelector((state) => state.categories.record);
  const loading = useAppSelector((state) => state.categories.loading);

  useEffect(() => {
    const promise=dispatch(fetchCategories());

    return () => {
      dispatch(categoriesCleanUp());
      promise.abort()
    };
  }, [dispatch]);

  return {categoriesList,loading};
};

export default useCategories;
