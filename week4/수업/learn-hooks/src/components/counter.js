import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>카운트:{count}</p>
      <button onClick={onClick}>plus</button>
    </div>
  );
}