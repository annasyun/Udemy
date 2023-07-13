import React from "react";
import useForm from "../hooks/useForm";

const Login = () => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });
  //   const { values, handleChange, resetForm } = useForm("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login data", values);
    resetForm();
  };
  console.log(values);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="idInp">id</label>
      <input
        type="text"
        id="idInp"
        onChange={handleChange}
        name="username"
        value={values.name}
      />
      <label htmlFor="pwInp">pw</label>
      <input
        type="text"
        id="pwInp"
        onChange={handleChange}
        name="password"
        value={values.name}
      />
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
