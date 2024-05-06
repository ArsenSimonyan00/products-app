import { useEffect } from "react";
import s from "./styles.module.scss";
import { useAppDispatch } from "../../store/store";
import { fetchAllCategories } from "../../store/categories/api";
import { selectAllCategories } from "../../store/categories/selectors";
import { useSelector } from "react-redux";
import { setCategoryId, setRange } from "../../store/state/actions";
import { Category } from "../../types/types";

const Categories = () => {
  const dispatch = useAppDispatch();
  const categories: Category[] = useSelector(selectAllCategories);
  const colors = [
    "#2967FF",
    "#58CF18",
    "#FFA601",
    "#FF7CB4",
    "#FFA601",
    "#58CF18",
    "#2967FF",
    "#FF7CB4",
  ];
  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategories());
    }
  }, []);

  function handleClick(id: number) {
    dispatch(setCategoryId(id));
    dispatch(setRange({ from: 0, to: 15 }));
  }
  return (
    <div className={s.categories}>
      <h2 className={s.title}>Категории товаров</h2>
      <ul className={s.list}>
        {categories.map((category, index) => (
          <li
            key={category.id}
            className={`${s.item} ${s[`item_${index + 1}`]}`}
          >
            <button
              style={{ backgroundColor: colors[index] }}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
