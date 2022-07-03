import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getClinic = createAsyncThunk(
  'clinic/getClinic',
  async () => {
    const data = await axios.get('http://localhost:8001/api/clinic?id=ALL');
    const result = data.data.clinics;
    return result;
  }
)

const clinicSlide = createSlice({
  name: "clinic",
  initialState: {
    data: {},
    clinic: {},
    loading: false,
    error: ''
  },
  reducers: {
    addClinic: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentClinic: (state, action) => {
      state.clinic = action.payload;
    }
  },
  extraReducers: {
    //getClinic
    [getClinic.pending](state) {
      state.loading = true;
    },
    [getClinic.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getClinic.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: clinicReducer } = clinicSlide;
export const { addClinic, getCurrentClinic } = clinicSlide.actions;
export default clinicReducer;
