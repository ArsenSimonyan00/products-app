import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className={s.slider__wrapper}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <SwiperSlide key={index + 1}>
            <div
              className={`${s.slide} ${s.banner} ${s[`banner_${index + 1}`]}`}
            >
              <Link className={s.banner__link} to="#">
                Новая коллекция
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
