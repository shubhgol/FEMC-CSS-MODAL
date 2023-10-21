import { useEffect, useState } from "react";

const useOutSideHandler = (ref, excludeRef) => {
  const [isShow, setIsShow] = useState(false);

  const onMouseDownHandler = (e) => {
    if (
      (ref?.current && ref?.current?.contains(e.target)) ||
      excludeRef.current.contains(e.target)
    ) {
      console.log("IIIIIIIIII");
      setIsShow(true);
    } else {
      console.log("KKKKKKKK", ref.current);
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDownHandler);

    return () => {
      window.removeEventListener("mousedown", onMouseDownHandler);
    };
  }, []);

  return [isShow, setIsShow];
};

export default useOutSideHandler;
