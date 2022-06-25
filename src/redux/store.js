import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlide';
import authReducer from './authSlide';
import doctorReducer from './doctorSlide';
import departmentReducer from './departmentSlide';
import bookingReducer from './bookingSlide';


export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    doctor: doctorReducer,
    department: departmentReducer,
    booking: bookingReducer,
  }
})