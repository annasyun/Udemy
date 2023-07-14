import React, { useReducer, useState } from "react";

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
      break;
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
      break;

    default:
      return state;
      break;
  }
};

export const ToDoList = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      const newTodo = { id: Date.now(), text: input };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };
  return (
    <>
      <h1>할 일 목록</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="todays todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.text}</li>
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
};
