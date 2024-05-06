import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import GooglePlay from "../../assets/images/Google Play.jpg";
import AppStore from "../../assets/images/App Store.jpg";
import FacebookIcon from "../UI/Icons/Facebook";
import VkIcon from "../UI/Icons/Vk";
import InstagramIcon from "../UI/Icons/Instagram";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <Link to={"/"} className={s.logo}>
          React
        </Link>
        <div className={s.footer__content}>
          <div className={s.join__us}>
            <p>Присоединяйтесь к нам</p>
            <div className={s.social__media}>
              <Link to={"https://www.facebook.com/"}>
                <FacebookIcon className={`${s.fb__icon} ${s.icon}`} />
              </Link>
              <Link to={"https://vk.com/"}>
                <VkIcon className={`${s.vk__icon} ${s.icon}`} />
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <InstagramIcon className={`${s.insta__icon} ${s.icon}`} />
              </Link>
            </div>
          </div>
          <div className={s.install__app}>
            <p>Устанавливайте приложение</p>
            <div className={s.install__links}>
              <Link to={"#"}>
                {" "}
                <img src={GooglePlay} alt="GooglePlay" />{" "}
              </Link>
              <Link to={"#"}>
                {" "}
                <img src={AppStore} alt="AppStore" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={s.footer__bottom}>
        <p>
          © <Link to={"#"}>Sionic</Link>
        </p>
        <Link to={"#"}>Правовая информация</Link>
        <Link to={"#"}>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
};

export default Footer;
