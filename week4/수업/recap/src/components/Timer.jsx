import React, { useState } from "react";
import { useEffect } from "react";

const Timer = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const handleSec = setInterval(() => {
      setSec((sec) => parseInt(sec + 1));
    }, 1000);
    console.log("timer값", sec);

    return () => {
      clearInterval(handleSec);
    };
  }, []);
  return <div>sec 값: {sec}</div>;
};

export default Timer;
