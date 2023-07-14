import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    login: (state) => !state,
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
