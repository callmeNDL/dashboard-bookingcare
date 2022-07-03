import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlide';
import authReducer from './authSlide';
import doctorReducer from './doctorSlide';
import departmentReducer from './departmentSlide';
import bookingReducer from './bookingSlide';
import roleReducer from './roleSlide';
import medicineReducer from './medicineSlide';
import clinicReducer from './clinicSlide';
import prescriptionReducer from './prescriptionSlide';
import prescriptionDetailReducer from './prescriptionDetailSlide';
import scheduleReducer from './scheduleSlide';
import timetableReducer from './timetableSlide';
import medicalExaminationReducer from './medicalExamination';
import medicalTestReducer from './medicalTest';


export default configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    doctor: doctorReducer,
    department: departmentReducer,
    booking: bookingReducer,
    role: roleReducer,
    medicine: medicineReducer,
    clinic: clinicReducer,
    prescription: prescriptionReducer,
    prescriptionDetail: prescriptionDetailReducer,
    schedule: scheduleReducer,
    timetable: timetableReducer,
    medicalExamination: medicalExaminationReducer,
    medicalTest: medicalTestReducer,

  }
})