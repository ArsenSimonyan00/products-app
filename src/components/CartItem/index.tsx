import { FC } from "react";
import s from "./styles.module.scss";
import DeleteIcon from "../UI/Icons/Delete";
import { useAppDispatch } from "../../store/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/cart/actions";
import { CartProduct } from "../../types/types";

interface CartItemProps {
  item: CartProduct;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  function removeItem(id: number) {
    dispatch(removeFromCart(id));
  }
  function handleQuantityChange(item: any, isIncrement: boolean) {
    if (isIncrement) {
      dispatch(incrementQuantity(item.id));
    } else {
      if (item.quantity > 1) {
        dispatch(decrementQuantity(item.id));
      }
    }
  }
  return (
    <div className={s.cartItem}>
      <div className={s.cartItem__left}>
        <div className={s.cartItem__img}>
          <img src={item.img} alt="productImg" />
        </div>
        <div className={s.cartItem__info}>
          <p className={s.cartItem__name}>{item.name}</p>
        </div>
      </div>
      <div className={s.cartItem__right}>
        <div className={s.right__content}>
          <div className={s.quantity}>
            <button
              className={s.quantity__btn}
              onClick={() => handleQuantityChange(item, false)}
            >
              -
            </button>
            <span className={s.count}>{item.quantity}</span>
            <button
              className={s.quantity__btn}
              onClick={() => handleQuantityChange(item, true)}
            >
              +
            </button>
          </div>
          <div className={s.prices}>
            <p className={s.price}>{item.totalPrice} ₽</p>
          </div>
        </div>
        <button className={s.deleteBtn} onClick={() => removeItem(item.id)}>
          <DeleteIcon className={s.deleteIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
