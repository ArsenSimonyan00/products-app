import s from "./styles.module.scss";
import ShoppingCartList from "../../components/ShoppingCartList";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { clearCart } from "../../store/cart/actions";
import { selectCartItems } from "../../store/cart/selectors";

const ShoppingCartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  function removeAll() {
    dispatch(clearCart());
  }

  return (
    <div>
      <div className={s.shoppingCartTop}>
        <h2 className={s.title}>Корзина</h2>
        <button className={s.clearCartBtn} onClick={removeAll}>
          Очистить корзину
        </button>
      </div>
      {cartItems.length ? (
        <ShoppingCartList cartItems={cartItems} />
      ) : (
        <p className={s.emptyCart}>Нет товаров</p>
      )}
    </div>
  );
};

export default ShoppingCartPage;
