import React from "react";
import { useState, useEffect } from "react";

// export const Toggle = () => {
//   const [isOn, setIsOn] = useState(false);
//   const handleBtn = () => {
//     setIsOn(!isOn);
//   };
//   return <button onClick={handleBtn}>{isOn ? "켜짐" : "꺼짐"}</button>;
// };

// export const TodoList = (props) => {
//   const todos = props.todos;
//   return (
//     <ul>
//       {todos.map((item) => {
//         return <li>{item.text}</li>;
//       })}
//     </ul>
//   );
// };

export function Timer() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //     return () => {
  //         // 처음에 렌더링 될 때 실행됨
  //       console.log("clean up");
  //       clearInterval(timer);
  //     };
  //   }, []);

  return <p>{count}</p>;
}

export const Practice04 = () => {
  return (
    <>
      <Timer />
    </>
  );
};
