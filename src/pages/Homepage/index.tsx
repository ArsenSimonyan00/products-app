import { useEffect } from "react";
import s from "./styles.module.scss";
import Categories from "../../components/Categories";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getProducts } from "../../store/products/api";
import { selectAllProducts } from "../../store/products/selectors";
import Products from "../../components/Products";
import {
  selectCategoryId,
  selectIsEmpty,
  selectIsShowMoreClicked,
  selectProductLoading,
  selectProductRange,
} from "../../store/state/selectors";
import { isShowMoreClicked, setRange } from "../../store/state/actions";
import { useSelector } from "react-redux";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const isEmpty = useAppSelector(selectIsEmpty);
  const isLoading = useAppSelector(selectProductLoading);
  const range = useAppSelector(selectProductRange);
  const categoryId = useAppSelector(selectCategoryId);
  const isClicked = useSelector(selectIsShowMoreClicked);

  useEffect(() => {
    dispatch(getProducts(range, categoryId, isClicked));
  }, [range]);
  console.log(range.to);
  console.log(products.length);
  function handleClick() {
    if (!isEmpty) {
      dispatch(setRange({ from: range.to, to: range.to + 15 }));
      dispatch(isShowMoreClicked(true));
    }
  }
  return (
    <div>
      <Categories />
      <Products products={products} />
      {!isEmpty && products.length - 1 >= range.to && (
        <button
          className={s.show__more}
          onClick={handleClick}
          disabled={isLoading}
        >
          Показать больше товаров
        </button>
      )}
    </div>
  );
};

export default Homepage;
