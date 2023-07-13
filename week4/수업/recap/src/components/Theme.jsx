import React, { useReducer } from "react";

const initialState = { theme: "light" };

const reducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

const Theme = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div>
      <p>current Theme: {state.theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Theme;
