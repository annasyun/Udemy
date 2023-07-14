import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
    toggleTodo: (state, action) =>
      state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      ),
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
