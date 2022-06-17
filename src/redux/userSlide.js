import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const data = await axios.get('http://localhost:8001/api/user?id=ALL');
    const result = data.data.users;
    return result;
  }
)
const userSlide = createSlice({
  name: "user",
  initialState: {
    data: {},
    user: {},
    loading: false,
    error: ''
  },
  reducers: {
    getCurrentUser: (state, action) => {
      console.log("check payload", action.payload);
      state.user = action.payload;

    }
  },
  extraReducers: {
    //getUser
    [getUser.pending](state) {
      state.loading = true;
    },
    [getUser.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getUser.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
export const { getCurrentUser } = userSlide.actions;
const { reducer: userReducer } = userSlide;
export default userReducer;