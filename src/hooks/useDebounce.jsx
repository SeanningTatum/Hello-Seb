import { useEffect, useState } from 'react';

/**
Example
  ```tsx
  const Counter = () => {
    const [value, setValue] = React.useState(0);
    const lastValue = useDebounce(value, 500);

    return (
      <div>
        <p>
          Current: {value} - Debounced: {lastValue}
        </p>
        <button onClick={() => setValue(value + 1)}>Increment</button>
      </div>
    );
  };
  ```
 */
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
