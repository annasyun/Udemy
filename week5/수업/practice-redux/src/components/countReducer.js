import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
      break;
    case "DECREASE":
      return state - 1;
      break;
    case "RESET":
      return initialState;
      break;

    default:
      break;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>숫자 카운트</h1>
      <p>숫자:{count}</p>
      <button></button>
    </div>
  );
}
