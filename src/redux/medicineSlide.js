import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMedicine = createAsyncThunk(
  'medicine/getMedicine',
  async () => {
    const data = await axios.get('http://localhost:8001/api/medicine?id=ALL');
    const result = data.data.medicines;
    return result;
  }
)

const medicineSlide = createSlice({
  name: "medicine",
  initialState: {
    data: {},
    medicine: {},
    loading: false,
    error: ''
  },
  reducers: {
    addMedicine: (state, action) => {
      state.data.push(action.payload)
    },
  },
  extraReducers: {
    //getMedicine
    [getMedicine.pending](state) {
      state.loading = true;
    },
    [getMedicine.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getMedicine.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: medicineReducer } = medicineSlide;
export const { getCurrentMedicine } = medicineSlide.actions;
export default medicineReducer;
