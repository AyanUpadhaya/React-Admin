import { useState } from "react";

const useLocaleStorage = () => {
  const [value, setValue] = useState(null);
  //set item
  const setItem = (key, value) => {
    localStorage.setItem(key, value);
    setValue(value);
  };

  //get item
  const getItem = (key) => {
    const item = JSON.parse(localStorage.getItem(key));
    setValue(item);
    return value;
  };

  //remove item
  const removeItem = (key) => {
    localStorage.removeItem(key);
    setValue(null);
  };
  return { setItem, getItem, removeItem };
};

export default useLocaleStorage;