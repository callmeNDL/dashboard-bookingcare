import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrescriptionDetail = createAsyncThunk(
  'prescriptionDetail/getPrescriptionDetail',
  async () => {
    const data = await axios.get('http://localhost:8001/api/prescriptionDetail?id=ALL');
    const result = data.data.preDetails;
    return result;
  }
)

const prescriptionDetailSlide = createSlice({
  name: "prescriptionDetail",
  initialState: {
    data: {},
    prescriptionDetail: {},
    loading: false,
    error: false
  },
  reducers: {
    addPrescription: (state, action) => {
      state.data.push(action.payload)
    },
    //get prescriptionDetail with MaDT
    getWithMaDTStart: (state) => {
      state.loading = true;
    },
    getWithMaDTSuccess: (state, action) => {
      state.loading = false;
      state.prescriptionDetail = action.payload;
      state.error = false;
    },
    getWithMaDTFailed: (state) => {
      state.loading = false;
      state.error = true;
    },

  },
  extraReducers: {
    //getPrescriptionDetail
    [getPrescriptionDetail.pending](state) {
      state.loading = true;
    },
    [getPrescriptionDetail.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getPrescriptionDetail.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: prescriptionDetailReducer } = prescriptionDetailSlide;
export const { addPrescription, getWithMaDTStart, getWithMaDTSuccess, getWithMaDTFailed } = prescriptionDetailSlide.actions;
export default prescriptionDetailReducer;
