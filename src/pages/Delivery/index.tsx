import s from "./styles.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import DeliveryForm from "../../components/DeliveryForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectCartItems } from "../../store/cart/selectors";
import { addToHistory } from "../../store/History/actions";
import { clearCart } from "../../store/cart/actions";
import { CartProduct, OrderedProduct } from "../../types/types";

export type FormValues = {
  date: string;
  time: string;
  address: string;
  name: string;
  phone: string;
};
const Delivery = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: {
      date: "",
      time: "",
      address: "",
      name: "",
      phone: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const cartItems: CartProduct[] = useAppSelector(selectCartItems);

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    const historyItems: OrderedProduct[] = cartItems.map((item, index) => ({
      id: new Date().getTime() + index,
      img: item.img,
      name: item.name,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
      deliveryDate: data.date,
      deliveryAddress: data.address,
    }));
    dispatch(addToHistory(historyItems));
    dispatch(clearCart());
    navigate("/history");
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  return (
    <div className={s.delivery}>
      <h2 className={s.title}>Доставка</h2>
      <div className={s.content}>
        <div className={s.left}></div>
        <DeliveryForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          control={control}
          errors={errors}
        />
        <div className={s.right}>
          <div className={s.delivery__info}>
            <div className={s.content__flex}>
              <span className={s.info__text}>Стоимость товаров:</span>
              <span className={s.info__text}>{totalCost} ₽</span>
            </div>
            <div className={s.content__flex}>
              <span className={s.info__text}>Стоимость доставки:</span>
              <span className={s.info__text}>200 ₽</span>
            </div>
            <div className={`${s.result} ${s.content__flex}`}>
              <span className={s.result__text}>Итого:</span>
              <span className={s.result__price}>{totalCost + 200} ₽</span>
            </div>
          </div>

          <button
            className={s.delivery__btn}
            form="form"
            onClick={() => handleSubmit(onSubmit)}
          >
            Сделать заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
