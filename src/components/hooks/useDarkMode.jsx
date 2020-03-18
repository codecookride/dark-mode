import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(key, initialValues) {
  // inputs = state and handleChanges
  if (window.localStorage && window.localStorage.getItem(key)) {
    initialValues = JSON.parse(window.localStorage.getItem(key));
  }
  const [values] = useLocalStorage(key, initialValues);




  return [values];
}
