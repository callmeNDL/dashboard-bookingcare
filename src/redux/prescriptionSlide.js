import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrescription = createAsyncThunk(
  'prescription/getPrescription',
  async () => {
    const data = await axios.get('http://localhost:8001/api/prescription?id=ALL');
    const result = data.data.prescriptions;
    return result;
  }
)

const prescriptionSlide = createSlice({
  name: "prescription",
  initialState: {
    data: {},
    prescription: {},
    loading: false,
    error: ''
  },
  reducers: {
    addPrescription: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentPrescription: (state, action) => {
      state.prescription = action.payload;
    }
  },
  extraReducers: {
    //getPrescription
    [getPrescription.pending](state) {
      state.loading = true;
    },
    [getPrescription.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getPrescription.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: prescriptionReducer } = prescriptionSlide;
export const { addPrescription, getCurrentPrescription } = prescriptionSlide.actions;
export default prescriptionReducer;
