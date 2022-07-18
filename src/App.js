import './style/dark.scss';
import './style/globalStyle.scss';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { SingleMedicalTest, SingleMedicalExamination, Single, SingleDoctor, SingleDepartment, SingleRole, SingleClinic, SingleMedicine, SingleBooking, SinglePrescription, SinglePrescriptionDetail, SingleSchedule } from './pages/single/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { medicalTestInputs, medicalExaminationInputs, scheduleInputs, doctorInputs, userInputs, departmentInputs, bookingInputs, roleInputs, medicineInputs, clinicInputs, prescriptionInputs, prescriptionDetailInputs } from "./formSource";
import { medicalTestColumns, medicalExaminationColumns, scheduleColumns, userColumns, departmentColumns, bookingColumns, roleColumns, doctorColumns, medicineColumns, clinicColumns, prescriptionColumns, prescriptionDetailColumns } from './datatablesource';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NewPrescriptionDetail from './pages/new/NewPrescriptionDetail';
import AppLayout from './layout/Layout';

function App() {

  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="applayout" element={<AppLayout />} />

            <Route path="users">
              <Route index element={<List colum={userColumns} title="users" titleApi="user" />} />
              <Route path=":userID" element={<Single inputs={userInputs} title="user" img="true" />} />
              <Route path="new" element={<New inputs={userInputs} title="user" img="true" />} />
            </Route>
            <Route path="doctors">
              <Route index element={<List colum={doctorColumns} title="doctors" titleApi="doctor" />} />
              <Route path=":doctorID" element={<SingleDoctor inputs={doctorInputs} title="doctor" img="true" />} />
              <Route path="new" element={<New inputs={doctorInputs} title="doctor" img="true" />} />
            </Route>
            <Route path="bookings">
              <Route index element={<List colum={bookingColumns} title="bookings" titleApi="booking" />} />
              <Route path=":bookingID" element={<SingleBooking inputs={bookingInputs} title="booking" img="false" />} />
              <Route path="new" element={<New inputs={bookingInputs} title="booking" img="false" />} />
            </Route>
            <Route path="medicalExaminations">
              <Route index element={<List colum={medicalExaminationColumns} title="medicalExaminations" titleApi="medicalExamination" />} />
              <Route path=":medicalExaminationID" element={<SingleMedicalExamination inputs={medicalExaminationInputs} title="medicalExamination" img="false" />} />
              <Route path="new" element={<New inputs={medicalExaminationInputs} title="medicalExamination" img="false" />} />
            </Route>
            <Route path="medicalTests">
              <Route index element={<List colum={medicalTestColumns} title="medicalTests" titleApi="medicalTest" />} />
              <Route path=":medicalTestID" element={<SingleMedicalTest inputs={medicalTestInputs} title="medicalTest" img="false" />} />
              <Route path="new" element={<New inputs={medicalTestInputs} title="medicalTest" img="false" />} />
            </Route>
            <Route path="schedules">
              <Route index element={<List colum={scheduleColumns} title="schedules" titleApi="schedule" />} />
              <Route path=":scheduleID" element={<SingleSchedule inputs={scheduleInputs} title="schedule" img="false" />} />
              <Route path="new" element={<New inputs={scheduleInputs} title="schedule" img="false" />} />
            </Route>
            <Route path="departments">
              <Route index element={<List colum={departmentColumns} title="departments" titleApi="department" />} />
              <Route path=":departmentID" element={<SingleDepartment inputs={departmentInputs} title="department" img="false" />} />
              <Route path="new" element={<New inputs={departmentInputs} title="department" img="false" />} />
            </Route>
            <Route path="roles">
              <Route index element={<List colum={roleColumns} title="roles" titleApi="role" />} />
              <Route path=":roleID" element={<SingleRole inputs={roleInputs} title="role" img="false" />} />
              <Route path="new" element={<New inputs={roleInputs} title="role" img="false" />} />
            </Route>
            <Route path="medicines">
              <Route index element={<List colum={medicineColumns} title="medicines" titleApi="medicine" />} />
              <Route path=":medicineID" element={<SingleMedicine inputs={medicineInputs} title="medicine" img="false" />} />
              <Route path="new" element={<New inputs={medicineInputs} title="medicine" img="false" />} />
            </Route>
            <Route path="prescriptions">
              <Route index element={<List colum={prescriptionColumns} title="prescriptions" titleApi="prescription" />} />
              <Route path=":prescriptionID" element={<SinglePrescription inputs={prescriptionInputs} title="prescription" img="false" />} />
              <Route path="new" element={<New inputs={prescriptionInputs} title="prescription" img="false" />} />
            </Route>
            <Route path="prescriptionDetails">
              <Route index element={<List colum={prescriptionDetailColumns} title="prescriptionDetails" titleApi="prescriptionDetail" />} />
              <Route path=":preDetailID" element={<SinglePrescriptionDetail inputs={prescriptionDetailInputs} title="prescriptionDetail" img="false" />} />
              <Route path="new" element={<New inputs={prescriptionDetailInputs} title="prescriptionDetail" img="false" />} />
              <Route path="detail/:prescriptionID" element={<NewPrescriptionDetail inputs={prescriptionDetailInputs} />} />

            </Route>
            <Route path="clinics">
              <Route index element={<List colum={clinicColumns} title="clinics" titleApi="clinic" />} />
              <Route path=":clinicID" element={<SingleClinic inputs={clinicInputs} title="clinic" img="false" />} />
              <Route path="new" element={<New inputs={clinicInputs} title="clinic" img="false" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
