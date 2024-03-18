import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
  },
});

export const { setAuthToken } = authSlice.actions;

export default authSlice.reducer;
