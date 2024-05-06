import { FC } from "react";
import s from "./styles.module.scss";
import { Product as ProductType } from "../../types/types";
import { useAppDispatch } from "../../store/store";
import { addToCart } from "../../store/cart/actions";

interface ProductsProps {
  product: ProductType;
}

const Product: FC<ProductsProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  function handleAddToCart(product: ProductType) {
    dispatch(addToCart(product));
  }
  return (
    <li className={s.card__item}>
      <article className={s.card}>
        <div className={s.card__img}>
          <img src={product.img} alt="product Image" />
        </div>
        <div className={s.content}>
          <h3 className={s.card__title}>{product.name}</h3>
          <div className={s.card__bottom}>
            <p className={s.discount__price}>{product.price} ₽</p>
            <div className={s.price__bottom}>
              <p className={s.price}>{Math.trunc(+product.price * 1.1)} ₽</p>
              <span className={s.discount}>-10%</span>
            </div>

            <button
              className={s.add__Btn}
              onClick={() => handleAddToCart(product)}
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Product;
