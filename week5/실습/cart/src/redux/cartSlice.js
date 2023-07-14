import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct1: (state, action) => [...state, action.payload],
    addProduct2: (state, action) => [...state, action.payload],
    deleteProduct: (state, action) =>
      state.filter((product) => product.id !== action.payload),
  },
});
export const { addProduct1, addProduct2, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
