import { useState, useEffect, useMemo } from "react";

const useDebounce = (value: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;

// example:
/*

const [input, setInput] = useState("");
const debouncedInput = useDebounce(input, 500);

const arr = ["a", "b", "c", "d", "e", "f"];
const list = useMemo(() => {
  if (!input) return arr;

  return arr.filter((item) => {
    item.toLowerCase().includes(debouncedInput.toLowerCase());
  });
}, [debouncedInput, arr]);

*/
