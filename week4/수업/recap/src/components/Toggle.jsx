import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [sec, setSec] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const btnToggle = () => {
    setIsShow(!isShow);
  };
  //
  //   useEffect(() => {
  //     let handleSec;
  //     if (isShow) {
  //       handleSec = setInterval(() => {
  //         setSec((sec) => parseInt(sec + 1));
  //       }, 1000);
  //       console.log("timer값", sec);
  //     } else {
  //       setSec(0);
  //     }

  //     return () => {
  //       clearInterval(handleSec);
  //       console.log("return !");
  //     };
  //   }, [isShow]);

  // handleSec 함수를 useEffect 바깥으로 분리하면
  // 타이머 진행이 빨라지는 것 같다!!
  let id;
  const handleSec = () => {
    id = setInterval(() => {
      setSec((sec) => parseInt(sec + 1));
    }, 1000);
  };
  useEffect(() => {
    if (isShow) {
      handleSec();
      console.log("timer값", sec);
    } else {
      setSec(0);
    }

    return () => {
      // clearInterval(handleSec);
      clearInterval(id); // 타이머 진행이 빨라지는 것 해결법 : handleSec함수가 아닌 setInterval 함수의 id값을 클리어 시켜야함!!!
      console.log("return !");
    };
  }, [isShow]);

  return (
    <div>
      {isShow ? <p>sec 값: {sec}</p> : null}
      <button type="button" onClick={btnToggle}>
        {isShow ? "Hide Seconds" : "Show Seconds"}
      </button>
    </div>
  );
};

export default Toggle;
