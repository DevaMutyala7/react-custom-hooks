import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function useResponsive() {
  const [device, setDevice] = useState({
    isMobile: false,
    isDesktop: false,
    isTablet: false,
  });

  const handler = () => {
    const width = window.innerWidth;
    const isMobile = width <= 768;
    const isDesktop = width > 990;
    const isTablet = width > 768 && width <= 990;

    setDevice({ isDesktop, isMobile, isTablet });
  };

  const debouncedFunc = useDebounce(handler, 1000);

  const addHandler = () => {
    window.addEventListener("resize", debouncedFunc);
  };

  useEffect(() => {
    addHandler();

    handler();

    return () => {
      window.addEventListener("resize", debouncedFunc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return device;
}
