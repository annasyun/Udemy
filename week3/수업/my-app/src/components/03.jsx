import React from "react";

export function Greeting({ name }) {
  return <p>반갑습니다 {name}님!</p>;
}

export function Practice03() {
  return (
    <div>
      <Greeting name={"윤정"} />
    </div>
  );
}
