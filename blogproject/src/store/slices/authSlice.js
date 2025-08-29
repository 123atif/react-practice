import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, // false = logged out by default
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState, // ✅ correct spelling
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
