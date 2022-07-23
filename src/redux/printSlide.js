import { createSlice } from "@reduxjs/toolkit";

const printSlide = createSlice({
  name: "print",
  initialState: {
    prescription: {
      current: null,
      loading: false,
      error: false
    },
  },
  reducers: {
    printPrescriptionStart: (state) => {
      state.prescription.loading = true;
    },
    printPrescriptionSuccess: (state, action) => {
      state.prescription.loading = false;
      state.prescription.current = action.payload;
      state.prescription.error = false
    },
    printPrescriptionFailed: (state) => {
      state.prescription.loading = false;
      state.prescription.error = true
    },
  },
  extraReducers: {

  }
})

export const {
  printPrescriptionStart,
  printPrescriptionFailed,
  printPrescriptionSuccess,
} = printSlide.actions;
export default printSlide.reducer;