import React, { useState } from "react";

function Text() {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <textarea
        onChange={onChange}
        name=""
        id=""
        cols="30"
        rows="10"
        value={text}
      ></textarea>
      <p>Character Count:{text.length}</p>
    </div>
  );
}

export default Text;
