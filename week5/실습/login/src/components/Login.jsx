// import React, { useReducer } from "react";

// const initialState = false;
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       return true;
//       break;
//     case "LOGOUT":
//       return false;
//       break;

//     default:
//       break;
//   }
// };

// const Login = () => {
//   const [isLogin, dispatch] = useReducer(reducer, initialState);
//   const handleLogin = () => {
//     isLogin ? dispatch({ type: "LOGOUT" }) : dispatch({ type: "LOGIN" });
//   };
//   return (
//     <div>
//       <p>{isLogin ? "로그인 상태입니다." : "로그인 되지 않았습니다."}</p>
//       <button onClick={handleLogin}>{isLogin ? "로그아웃" : "로그인"}</button>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <p>{auth ? "로그인 상태입니다." : "로그인 되지 않았습니다."}</p>
      <button onClick={handleLogin}>{auth ? "로그아웃" : "로그인"}</button>
    </div>
  );
};

export default Login;
