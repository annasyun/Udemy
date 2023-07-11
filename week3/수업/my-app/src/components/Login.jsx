import React, { useState } from "react";

export const Login = () => {
  const handleLogin = () => {
    console.log("id", id);
    console.log("pw", pw);
    if (id === "admin" && pw === "password") {
      alert("로그인 성공!");
    } else {
      alert("로그인 실패!");
    }
  };
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdValue = (e) => {
    setId(e.target.value);
  };
  const handlePwValue = (e) => {
    setPw(e.target.value);
  };
  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <form>
      <label htmlFor="id">아이디:</label>
      <input id="id" type="text" value={id} onChange={handleIdValue} />
      <br />
      <label htmlFor="password">비밀번호:</label>
      <input
        id="password"
        type="password"
        value={pw}
        onChange={handlePwValue}
        onKeyUp={handleOnEnter}
      />
      <br />
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </form>
  );
};
