import { useEffect, useState } from "react";

export function useScreenSize() {
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    function changeSize() {
      setSize(window.innerWidth);
    }

    changeSize();

    window.addEventListener("resize", changeSize);

    return () => window.removeEventListener("resize", changeSize);
  }, []);

  return size;
}
