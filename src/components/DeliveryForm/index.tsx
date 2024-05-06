import { FC } from "react";
import s from "./styles.module.scss";
import PhoneInput from "react-phone-input-2";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { FormValues } from "../../pages/Delivery";

interface DeliveryFormProps {
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  onSubmit: SubmitHandler<FormValues>;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
}

const DeliveryForm: FC<DeliveryFormProps> = ({
  register,
  handleSubmit,
  onSubmit,
  control,
  errors,
}) => {
  let currentDate = new Date();
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)} id="form">
        <div className={s.date}>
          <p className={s.form__title}>Когда доставить?</p>
          <input
            className={s.date__input}
            type="date"
            placeholder="Выберите дату"
            min={currentDate.toISOString().split("T")[0]}
            {...register("date", { required: "Date is required" })}
          />
          <input
            className={s.date__input}
            type="time"
            placeholder="Выберите время"
            {...register("time", { required: "Date and Time is required" })}
          />
          {errors.time && (
            <p className={s.error__message}>{errors.time.message}</p>
          )}
        </div>
        <div className={s.where_to_deliver}>
          <p className={s.form__title}>Куда доставить?</p>
          <input
            className={s.input}
            type="text"
            placeholder="Выберите адрес доставки"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className={s.error__message}>{errors.address.message}</p>
          )}
        </div>
        <div className={s.name}>
          <p className={s.form__title}>Имя</p>
          <input
            className={s.input}
            type="text"
            placeholder="Имя"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className={s.error__message}>{errors.name.message}</p>
          )}
        </div>
        <div className={s.phone}>
          <p className={s.form__title}>Телефон</p>

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                inputClass={s.input}
                specialLabel=""
                inputProps={{
                  name: field.name,
                }}
              />
            )}
          />
          {errors.phone && (
            <p className={s.error__message}>{errors.phone.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
