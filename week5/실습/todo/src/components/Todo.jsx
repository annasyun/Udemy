import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/todosSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      const newTodo = { id: Date.now(), content: input, done: false };
      dispatch(addTodo(newTodo));
      setInput("");
    }
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo) => {
          const todoStyle = todo.done ? { textDecoration: "line-through" } : {};
          return (
            <li key={todo.id} style={todoStyle}>
              <span onClick={() => handleToggleTodo(todo.id)}>
                {todo.content}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <input value={input} type="text" onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default Todo;
