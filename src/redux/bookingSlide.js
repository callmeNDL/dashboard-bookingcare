import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooking = createAsyncThunk(
  'booking/getBooking',
  async () => {
    const data = await axios.get('http://localhost:8001/api/booking?id=ALL');
    const result = data.data.bookings;
    return result;
  }
)

const bookingSlide = createSlice({
  name: "booking",
  initialState: {
    data: {},
    booking: {},
    loading: false,
    error: ''
  },
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: {
    //get booking
    [getBooking.pending](state) {
      state.loading = true;
    },
    [getBooking.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getBooking.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})

const { reducer: bookingReducer } = bookingSlide;
export default bookingReducer;