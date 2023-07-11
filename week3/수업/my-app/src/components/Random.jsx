import React, { useState } from "react";

function Random() {
  const [numbers, setNumbers] = useState([]);
  const handleBtn = () => {
    const randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      console.log(i);
      console.log(numbers);
      // setNumbers([...numbers, parseInt(Math.random() * 100 + 1)]);
      // 셋 함수 6번 실행 될 것 같지만 안 됨!!!
      randomNumbers.push(parseInt(Math.random() * 100 + 1));
    }
    setNumbers([...numbers, ...randomNumbers]);
  };
  return (
    <h1>
      Random
      <br />
      <button onClick={handleBtn}>로또 번호 생성기</button>
      <p>
        최솟값:
        {numbers.length > 0 ? Math.min(...numbers) : "번호를 생성해주세요"}
      </p>
      <p>
        최댓값:
        {numbers.length > 0 ? Math.max(...numbers) : "번호를 생성해주세요"}
      </p>
      <ul>
        {numbers.length > 0
          ? numbers.map((v, i) => {
              return <li key={i}>{v}</li>;
            })
          : "버튼을 클릭해주세요!"}
      </ul>
    </h1>
  );
}

export default Random;
