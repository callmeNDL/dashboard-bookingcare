import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "user",
  initialState: {
    login: {
      currentUser: null,
      loading: false,
      error: false
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.loading = true;
    },
    loginSuccess: (state, action) => {
      state.login.loading = false;
      state.login.currentUser = action.payload;
      state.login.error = false
    },
    loginFailed: (state) => {
      state.login.loading = false;
      state.login.error = true
    },
    logoutStart: (state, action) => {
      state.login.loading = true;
    },
    logoutSuccess: (state) => {
      state.login.loading = false;
      state.login.currentUser = null;
      state.login.error = false
    },
    logoutFailed: (state) => {
      state.login.loading = false;
      state.login.error = true
    }
  },
  extraReducers: {

  }
})


export const {
  loginStart,
  loginFailed,
  loginSuccess,
  logoutStart,
  logoutFailed,
  logoutSuccess
} = authSlide.actions;
export default authSlide.reducer;