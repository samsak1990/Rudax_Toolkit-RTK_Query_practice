import React, { useEffect, useState } from "react";

export default function useDebounce({ value, delay }) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  });
  return debounceValue;
}
