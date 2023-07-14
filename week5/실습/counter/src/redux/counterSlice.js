import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
    reset: () => 0,
  },
});

export const { increase, decrease, reset } = counterSlice.actions;
export default counterSlice.reducer;
