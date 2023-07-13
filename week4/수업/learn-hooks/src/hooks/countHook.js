import { useState } from "react";
function useCounter(initCount) {
  const [count, setCount] = useState(initCount);
  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
}

export default useCounter;
