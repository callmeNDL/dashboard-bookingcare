import { createSlice } from "@reduxjs/toolkit";

const printSlide = createSlice({
  name: "print",
  initialState: {
    prescription: {
      current: null,
      loading: false,
      error: false
    },
    invoicePrescription: {
      current: null,
      loading: false,
      error: false
    },
    medicalExamination: {
      current: null,
      loading: false,
      error: false
    },
    MaDL: null,
    invoice: {
      current: null,
      loading: false,
      error: false
    },
    medicalResult: {
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
    printInvoicePrescriptionStart: (state) => {
      state.invoicePrescription.loading = true;
    },
    printInvoicePrescriptionSuccess: (state, action) => {
      state.invoicePrescription.loading = false;
      state.invoicePrescription.current = action.payload;
      state.invoicePrescription.error = false
    },
    printInvoicePrescriptionFailed: (state) => {
      state.invoicePrescription.loading = false;
      state.invoicePrescription.error = true
    },
    printMedicalEXStart: (state) => {
      state.medicalExamination.loading = true;
    },
    printMedicalEXSuccess: (state, action) => {
      state.medicalExamination.loading = false;
      state.medicalExamination.current = action.payload;
      state.medicalExamination.error = false
    },
    printMedicalEXFailed: (state) => {
      state.medicalExamination.loading = false;
      state.medicalExamination.error = true
    },
    addMaDL: (state, action) => {
      state.MaDL = action.payload;
    },
    printInvoiceStart: (state) => {
      state.invoice.loading = true;
    },
    printInvoiceSuccess: (state, action) => {
      state.invoice.loading = false;
      state.invoice.current = action.payload;
      state.invoice.error = false
    },
    printInvoiceFailed: (state) => {
      state.invoice.loading = false;
      state.invoice.error = true
    },
    printMedicalResultStart: (state) => {
      state.medicalResult.loading = true;
    },
    printMedicalResultSuccess: (state, action) => {
      state.medicalResult.loading = false;
      state.medicalResult.current = action.payload;
      state.medicalResult.error = false
    },
    printMedicalResultFailed: (state) => {
      state.medicalResult.loading = false;
      state.medicalResult.error = true
    }
  },
  extraReducers: {

  }
})

export const {
  printInvoicePrescriptionStart,
  printInvoicePrescriptionFailed,
  printInvoicePrescriptionSuccess,
  printPrescriptionStart,
  printPrescriptionFailed,
  printPrescriptionSuccess,
  printMedicalEXStart,
  printMedicalEXSuccess,
  printMedicalEXFailed,
  addMaDL,
  printInvoiceStart,
  printInvoiceSuccess,
  printInvoiceFailed,
  printMedicalResultStart,
  printMedicalResultSuccess,
  printMedicalResultFailed,
} = printSlide.actions;
export default printSlide.reducer;