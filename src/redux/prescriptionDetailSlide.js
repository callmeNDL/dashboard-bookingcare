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
    error: ''
  },
  reducers: {
    addPrescription: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentPrescription: (state, action) => {
      state.prescriptionDetail = action.payload;
    }
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
export const { addPrescription, getCurrentPrescription } = prescriptionDetailSlide.actions;
export default prescriptionDetailReducer;
