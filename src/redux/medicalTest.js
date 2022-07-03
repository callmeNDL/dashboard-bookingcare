import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedicalTest = createAsyncThunk(
  'medicalTest/getMedicalTest',
  async () => {
    const data = await axios.get('http://localhost:8001/api/medicalTest?id=ALL');
    const result = data.data.medicalTests;
    return result;
  }
)

const medicalTestSlide = createSlice({
  name: "medicalTest",
  initialState: {
    data: {},
    medicalTest: {},
    loading: false,
    error: ''
  },
  reducers: {
    addMedicalTest: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentMedicalTest: (state, action) => {
      state.medicalTest = action.payload;
    }
  },
  extraReducers: {
    //getMedicalTest
    [getMedicalTest.pending](state) {
      state.loading = true;
    },
    [getMedicalTest.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getMedicalTest.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: medicalTestReducer } = medicalTestSlide;
export const { addMedicalTest, getCurrentMedicalTest } = medicalTestSlide.actions;
export default medicalTestReducer;
