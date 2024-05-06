import { useEffect, useState } from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Header from "../Header";
import s from "./stylee.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import Slider from "../Slider";

const Layout = () => {
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const paths = ["/", "/shopping-cart"];
  const device = useMediaQuery();

  useEffect(() => {
    if (paths.includes(location.pathname)) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [location.pathname]);
  return (
    <main className={s.main}>
      <div className={s.wrapper}>
        <div className={s.wrapper__left}>
          <Header />
          {device !== "laptop" && <Slider />}
          <div className={s.content}>
            <Outlet />
          </div>
        </div>
        {device === "laptop" && <Sidebar isShow={isShow} />}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
