import { dir } from "console";
import { useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState(-1);
  const [scrollTop, setScorllTop] = useState(0);

  useEffect(() => {
    function updateScroll() {
      setScorllTop(window.scrollY);
    }

    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scrollTop]);

  useEffect(() => {
    function checkNav(e: WheelEvent) {
      const direction = Math.sign(e.deltaY);

      if (scroll < 0 && direction > 0) {
        setScroll(1);
      } else if (scroll > 0 && direction < 0) {
        setScroll(-1);
      }
    }

    window.addEventListener("wheel", checkNav);

    return () => {
      window.removeEventListener("wheel", checkNav);
    };
  }, [scroll]);

  useEffect(() => {
    let prevY: number;
    function trackScroll(e: TouchEvent) {
      const touch = e.touches[0];
      const currentY = touch.clientY;
      const direction = Math.sign(prevY - currentY);
      if (direction !== 0) setScroll(direction);
      prevY = currentY;
    }

    window.addEventListener("touchmove", trackScroll);

    return () => {
      window.removeEventListener("touchmove", trackScroll);
    };
  }, []);

  return { scroll, scrollTop };
}
