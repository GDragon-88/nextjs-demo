import { useEffect, useRef } from 'react';

const useDebounce = <T extends any[]>(func: (...args: T) => void, delay: number): ((...args: T) => void) => {
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedFunction = (...args: T) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunction;
};

export default useDebounce;
