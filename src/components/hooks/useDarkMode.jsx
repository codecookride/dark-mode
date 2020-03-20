import React, { useEffect } from "react";
import {useLocalStorage} from "./useLocalStorage";


function useDarkMode(key) {
  const [toggleOnorOff, setOnorOff] = useLocalStorage(key, false);
  useEffect(() => {
    toggleOnorOff
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [toggleOnorOff]);
  return [toggleOnorOff, setOnorOff];
}
export default useDarkMode;