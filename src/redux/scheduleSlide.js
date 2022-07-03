import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSchedule = createAsyncThunk(
  'schedule/getSchedule',
  async () => {
    const data = await axios.get('http://localhost:8001/api/schedule?id=ALL');
    const result = data.data.schedules;
    return result;
  }
)

const scheduleSlide = createSlice({
  name: "schedule",
  initialState: {
    data: {},
    schedule: {},
    loading: false,
    error: ''
  },
  reducers: {
    addSchedule: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentSchedule: (state, action) => {
      state.schedule = action.payload;
    }
  },
  extraReducers: {
    //getSchedule
    [getSchedule.pending](state) {
      state.loading = true;
    },
    [getSchedule.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getSchedule.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: scheduleReducer } = scheduleSlide;
export const { addSchedule, getCurrentSchedule } = scheduleSlide.actions;
export default scheduleReducer;
