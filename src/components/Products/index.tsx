import { FC } from "react";
import s from "./styles.module.scss";
import Product from "../Product";
import { Product as ProductType } from "../../types/types";
import { useSelector } from "react-redux";
import { selectIsEmpty } from "../../store/state/selectors";

interface ProductsProps {
  products: ProductType[];
}
const Products: FC<ProductsProps> = ({ products }) => {
  const isEmpty = useSelector(selectIsEmpty);

  if (isEmpty) {
    return (
      <h2 className={s.emptyText}>
        На данный момент выбранная категория не содержит товаров
      </h2>
    );
  }
  return (
    <div>
      <ul className={s.products}>
        {products.map((product: ProductType, index) => (
          <Product key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
