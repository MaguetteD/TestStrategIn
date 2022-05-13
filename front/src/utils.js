/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';

export const useStateWithLocalStorage = (storageKey) => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(storageKey), '')
  );

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);
  return [value, setValue];
};
