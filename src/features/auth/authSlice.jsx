import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("writerAuthToken") || null,
  email: "",
  id: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.token = action.payload?.token;
      state.email = action.payload?.email;
      state.id = action.payload?.id;
      action.payload?.token
        ? localStorage.setItem("writerAuthToken", action.payload?.token)
        : "";
      action.payload?.token
        ? localStorage.setItem("writerAuth", JSON.stringify(action.payload))
        : "";
    },
    logout: (state) => {
      localStorage.removeItem("writerAuthToken");
      localStorage.removeItem("writerAuth");
      state.email = "";
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout } = authSlice.actions;
