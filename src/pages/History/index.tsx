import s from "./styles.module.scss";
import Order from "../../components/Order";
import { useAppSelector } from "../../store/store";
import { selectOrders } from "../../store/History/selectors";
import { OrderedProduct } from "../../types/types";

const History = () => {
  const orders: OrderedProduct[] = useAppSelector(selectOrders);
  return (
    <div className={s.history}>
      <h2 className={s.title}>История заказов</h2>
      <div className={s.orders}>
        {orders.map((order) => (
          <Order order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default History;
