import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDoctor = createAsyncThunk(
  'doctor/getDoctor',
  async () => {
    const data = await axios.get('http://localhost:8001/api/doctor?id=ALL');
    const result = data.data.doctors;
    return result;
  }
)

const doctorSlide = createSlice({
  name: "doctor",
  initialState: {
    data: {},
    doctor: {},
    loading: false,
    error: ''
  },
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: {
    //get doctor
    [getDoctor.pending](state) {
      state.loading = true;
    },
    [getDoctor.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getDoctor.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})

const { reducer: doctorReducer } = doctorSlide;
export default doctorReducer;