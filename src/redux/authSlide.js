import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "user",
  initialState: {
    login: {
      currentUser: null,
      loading: false,
      error: ''
    },
  },
  reducers: {
    loginStart: (state, action) => {
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
    }

  },
  extraReducers: {
    //getUser
    // [getUser.pending](state) {
    //   state.loading = true;
    // },
    // [getUser.fulfilled](state, { payload }) {
    //   state.loading = false;
    //   state.data = payload;
    // },
    // [getUser.rejected](state, { payload }) {
    //   state.loading = false;
    //   state.error = payload
    // },
  }
})


export const { loginStart, loginFailed, loginSuccess } = authSlide.actions;
export default authSlide.reducer;