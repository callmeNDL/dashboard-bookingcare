import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDepartment = createAsyncThunk(
  'department/getDepartment',
  async () => {
    const data = await axios.get('http://localhost:8001/api/department?id=ALL');
    const result = data.data.departments;
    return result;
  }
)

const departmentSlide = createSlice({
  name: "department",
  initialState: {
    data: {},
    department: {},
    loading: false,
    error: ''
  },
  reducers: {
    // addUser: (state, action) => {
    //   state.push(action.payload);
    // }
  },
  extraReducers: {
    //get department
    [getDepartment.pending](state) {
      state.loading = true;
    },
    [getDepartment.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getDepartment.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})

const { reducer: departmentReducer } = departmentSlide;
export default departmentReducer;