import React from "react";
import { useState } from "react";

export default function Practice02() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      카운트:{counter}
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
}
