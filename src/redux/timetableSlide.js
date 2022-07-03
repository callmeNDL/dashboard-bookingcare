import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTimetable = createAsyncThunk(
  'timetable/getTimetable',
  async () => {
    const data = await axios.get('http://localhost:8001/api/timetable?id=ALL');
    const result = data.data.timetables;
    return result;
  }
)

const timetableSlide = createSlice({
  name: "timetable",
  initialState: {
    data: {},
    timetable: {},
    loading: false,
    error: ''
  },
  reducers: {
    addTimetable: (state, action) => {
      state.data.push(action.payload)
    },
    getCurrentTimetable: (state, action) => {
      state.timetable = action.payload;
    }
  },
  extraReducers: {
    //getTimetable
    [getTimetable.pending](state) {
      state.loading = true;
    },
    [getTimetable.fulfilled](state, { payload }) {
      state.loading = false;
      state.data = payload;
    },
    [getTimetable.rejected](state, { payload }) {
      state.loading = false;
      state.error = payload
    },
  }
})
const { reducer: timetableReducer } = timetableSlide;
export const { addTimetable, getCurrentTimetable } = timetableSlide.actions;
export default timetableReducer;
