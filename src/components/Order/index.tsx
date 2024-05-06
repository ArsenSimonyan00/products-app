import { FC } from "react";
import s from "./styles.module.scss";
import ChevronUp from "../UI/Icons/ChevronUp";
import { Link } from "react-router-dom";
import { OrderedProduct } from "../../types/types";

interface OrderProps {
  order: OrderedProduct;
}

const Order: FC<OrderProps> = ({ order }) => {
  return (
    <div className={s.order}>
      <div className={s.order__header}>
        <div className={s.left}>
          <div className={s.order__img}>
            <img src={order.img} alt="order Img" />
          </div>
          <div className={s.header__text}>
            <h3 className={s.name}>{order.name}</h3>
            <span className={s.date}>{order.deliveryDate}</span>
            <button className={s.more}>Подробнее</button>
          </div>
        </div>
        <div className={s.right}>
          <button className={s.showMoreBtn}>
            <ChevronUp />
          </button>
        </div>
      </div>
      <div className={s.body}>
        <div className={s.body__item}>
          <div className={s.text__box}>
            <p className={s.text__light}>Статус заказа</p>
            <p className={s.text__bold}>Оплачен/Завершён</p>
          </div>
          <div className={s.text__box}>
            <p className={s.text__light}>Номер заказа</p>
            <Link className={s.text__copy} to={"#"}>
              #664-333
            </Link>
          </div>
        </div>
        <div className={s.body__item}>
          <div className={s.text__box}>
            <p className={s.text__light}>Кол-во товаров</p>
            <p className={s.text__bold}>{order.quantity} шт.</p>
          </div>
          <div className={s.text__box}>
            <p className={s.text__light}>Стоимость заказа</p>
            <p className={s.text__bold}>{order.totalPrice} ₽</p>
          </div>
          <div className={s.text__box}>
            <p className={s.text__light}>Адрес доставки</p>
            <p className={s.text__bold}>{order.deliveryAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
