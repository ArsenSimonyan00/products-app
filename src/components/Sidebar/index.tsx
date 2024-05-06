import { FC } from "react";
import s from "./styles.module.scss";
import bags from "../../assets/images/bags.svg";
import { Link } from "react-router-dom";

interface SidebarProps {
  isShow: boolean;
}
const Sidebar: FC<SidebarProps> = ({ isShow }) => {
  return (
    <aside className={s.sidebar}>
      <div className={s.freeProducts}>
        <div className={s.freeProducts__imgWrapper}>
          <img className={s.freeProducts__img} src={bags} alt="bags" />
        </div>
        <div className={s.freeProducts__content}>
          <p className={s.freeProducts__title}>Получай товары БЕСПЛАТНО!</p>
          <Link className={s.freeProducts__link} to={"#"}>
            Узнать подробнее
          </Link>
        </div>
      </div>
      {isShow && (
        <div className={s.banners__wrapper}>
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index + 1}
              className={`${s.banner} ${s[`banner_${index + 1}`]}`}
            >
              <Link className={s.banner__link} to="#">
                Новая коллекция
              </Link>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
