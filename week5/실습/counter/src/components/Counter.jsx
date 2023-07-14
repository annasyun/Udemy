// import React from "react";
// import { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return state + 1;
//       break;
//     case "DECREASE":
//       return state - 1;
//       break;
//     case "RESET":
//       return initialState;
//       break;

//     default:
//       break;
//   }
// };

// const Counter = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   const handleUp = () => {
//     dispatch({ type: "INCREASE" });
//   };

//   const handleDown = () => {
//     dispatch({ type: "DECREASE" });
//   };
//   const handleReset = () => {
//     dispatch({ type: "RESET" });
//   };
//   return (
//     <>
//       <h1>Counter</h1>
//       <p>count:{count}</p>
//       <button onClick={handleUp}>up</button>
//       <button onClick={handleDown}>down</button>
//       <button onClick={handleReset}>reset</button>
//     </>
//   );
// };

// export default Counter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleUp = () => {
    dispatch(increase());
  };

  const handleDown = () => {
    dispatch(decrease());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>Counter</h1>
      <p>count: {count}</p>
      <button onClick={handleUp}>up</button>
      <button onClick={handleDown}>down</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

export default Counter;
