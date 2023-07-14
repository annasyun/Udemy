import React from "react";
import Button from "../components/ui/Button";

const Login = () => {
  return (
    <section className="px-5 py-12">
      <h2 className=" text-primary text-base font-bold mt-20 mx-auto w-16 h-16">
        <img
          src="assets/images/logo.svg"
          alt="Give MY Seat 로고 이미지"
          className="w-full h-full"
        />
      </h2>
      <Button text={"Login"} color={"text-white"} bgColor={"bg-primary"} />
    </section>
  );
};

export default Login;
