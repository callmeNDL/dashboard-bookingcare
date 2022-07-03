import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRole = createAsyncThunk(
  'role/getRole',
  async () => {
    const data = await axios.get('http://localhost:8001/api/role?id=ALL');
    const result = data.data.roles;
    return result;
  }
)

const roleSlide = createSlice({
  name: "role",
  initialState: {
    data: {},
    role: {},
    loading: false,
    error: ''
  },
  reducers: {
    addRole: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentRole: (state, action) => {
      state.role = action.payload;
    }
  },
  extraReducers: {
    //getRole
    [getRole.pending](state) {
      state.loading = true;
    },
    [getRole.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getRole.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: roleReducer } = roleSlide;
export const { addRole, getCurrentRole } = roleSlide.actions;
export default roleReducer;
