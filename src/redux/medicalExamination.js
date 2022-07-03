import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedicalExamination = createAsyncThunk(
  'medicalExamination/getMedicalExamination',
  async () => {
    const data = await axios.get('http://localhost:8001/api/medicalExamination?id=ALL');
    const result = data.data.medicalExaminations;
    return result;
  }
)

const medicalExaminationSlide = createSlice({
  name: "medicalExamination",
  initialState: {
    data: {},
    medicalExamination: {},
    loading: false,
    error: ''
  },
  reducers: {
    addMedicalExamination: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentMedicalExamination: (state, action) => {
      state.medicalExamination = action.payload;
    }
  },
  extraReducers: {
    //getMedicalExamination
    [getMedicalExamination.pending](state) {
      state.loading = true;
    },
    [getMedicalExamination.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getMedicalExamination.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: medicalExaminationReducer } = medicalExaminationSlide;
export const { addMedicalExamination, getCurrentMedicalExamination } = medicalExaminationSlide.actions;
export default medicalExaminationReducer;
