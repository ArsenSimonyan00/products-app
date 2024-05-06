import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setDevice("mobile");
      } else if (width >= 576 && width < 992) {
        setDevice("tablet");
      } else {
        setDevice("laptop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useMediaQuery;
