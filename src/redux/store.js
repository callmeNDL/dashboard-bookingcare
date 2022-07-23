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
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import printSlide from './printSlide';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const rootReducer = combineReducers({
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
  print: printSlide,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})

export let persistor = persistStore(store)
export default store;