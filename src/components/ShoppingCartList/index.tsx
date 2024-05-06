import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import cartImg from "../../assets/images/cart_img.png";
import CartItem from "../CartItem";
import { FC } from "react";
import { CartProduct } from "../../types/types";

interface ShoppingCartListProps {
  cartItems: CartProduct[];
}

const ShoppingCartList: FC<ShoppingCartListProps> = ({ cartItems }) => {
  const totalCost = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  return (
    <div className={s.cartList__wrapper}>
      <div className={s.cartList__header}>
        <h3 className={s.product__name}>Xiaomi</h3>
        <div className={s.cart__total__cost}>
          <p className={s.total__title}>Стоимость корзины:</p>
          <p className={s.total__cost}>{`${totalCost} ₽`}</p>
        </div>
        <Link to={"/delivery"} className={s.checkout}>
          Оформить
        </Link>
        <img className={s.cart__img} src={cartImg} alt="cartImg" />
      </div>
      <div className={s.cartList}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCartList;
