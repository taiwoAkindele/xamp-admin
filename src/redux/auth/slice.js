import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  adminLevel: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setAdminLevel: (state, action) => {
      localStorage.setItem("adminLevel", action.payload);
      state.adminLevel = action.payload;
    },
  },
});

export const { setAuthToken, setAdminLevel } = authSlice.actions;

export default authSlice.reducer;
