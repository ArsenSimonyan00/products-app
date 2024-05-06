import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import Pin from "../UI/Icons/Pin";
import ShoppingCartIcon from "../UI/Icons/ShoppingCart";
import avatar from "../../assets/images/avatar.png";
import { useAppSelector } from "../../store/store";
import { selectCartItems } from "../../store/cart/selectors";
import useMediaQuery from "../../hooks/useMediaQuery";
import Search from "../Search";
const Header = () => {
  const cartItemCount = useAppSelector(selectCartItems).length;
  const device = useMediaQuery();

  return (
    <>
      <header className={s.header}>
        <div className={s.header__left}>
          <a href="/" className={s.logo}>
            React
          </a>
          <p>
            <span>
              {" "}
              <Pin className={s.icon__pin} />
            </span>
            Александровск-Са...
          </p>
        </div>
        {device !== "mobile" && (
          <div className={s.header__search}>
            <Search />
          </div>
        )}
        <div className={s.header__right}>
          <Link to={"/shopping-cart"} className={s.cart}>
            <ShoppingCartIcon className={s.cart__icon} />
            {cartItemCount ? (
              <span className={s.product__count}>{cartItemCount}</span>
            ) : null}
          </Link>
          <button className={s.profile}>
            <img src={avatar} alt="Avatar" />
          </button>
        </div>
      </header>
      {device === "mobile" && (
        <div className={s.subHeader}>
          <Search />
        </div>
      )}
    </>
  );
};

export default Header;
