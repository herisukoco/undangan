import { useEffect } from "react";

const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      const preventScroll = () => {
        window.scrollTo(scrollLeft, scrollTop);
      };

      window.addEventListener("scroll", preventScroll);

      return () => {
        window.removeEventListener("scroll", preventScroll);
      };
    }
  }, [lock]);
};

export default useScrollLock;