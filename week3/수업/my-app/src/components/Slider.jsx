import React, { useState } from "react";
const Slider = () => {
  const imgSrc = [0, 1, 2];
  const [curIndex, setCurIndex] = useState(0);
  const handlePrevImgSrc = () => {
    if (curIndex === 0) {
      return;
    } else {
      setCurIndex(curIndex - 1);
    }
  };
  const handleNextImgSrc = () => {
    if (curIndex === imgSrc.length - 1) {
      return;
    } else {
      setCurIndex(curIndex + 1);
    }
  };
  return (
    <div>
      Slider
      <img
        src={`/img/${imgSrc[curIndex]}.jpg`}
        alt="왜 안뜸"
        style={{ width: "500px", height: "500px" }}
      />
      <button onClick={handlePrevImgSrc}>이전</button>
      <button onClick={handleNextImgSrc}>다음</button>
    </div>
  );
};

export default Slider;
