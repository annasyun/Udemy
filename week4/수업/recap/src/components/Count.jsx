import React, { useState } from "react";

export function Count() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <p>값: {count}</p>
      <button type="button" onClick={handleIncrement}>
        click to increase
      </button>
    </>
  );
}
