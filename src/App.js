import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List"
import New from "./pages/new/New"
import Single from "./pages/single/Single"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { doctorInputs, userInputs, departmentInputs, bookingInputs } from "./formSource";
import './style/dark.scss'
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useSelector } from 'react-redux';
import { userColumns, departmentColumns, bookingColumns } from './datatablesource';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/userSlide'
import { getDoctor } from './redux/doctorSlide'
import { getDepartment } from './redux/departmentSlide'
import { getBooking } from './redux/bookingSlide'



function App() {
  // const [user, setUser] = useState({})
  // const [doctor, setDoctor] = useState({})
  // const [department, setDepartment] = useState({})
  // const [booking, setBooking] = useState({})

  const dispatch = useDispatch();

  const dataDoctor = useSelector((state) => state.doctor.data);
  const dataUser = useSelector((state) => state.user.data);
  const dataDepartment = useSelector((state) => state.department.data);
  const dataBooking = useSelector((state) => state.booking.data);

  const { darkMode } = useContext(DarkModeContext);

  // const getDataUser = async () => {
  //   await dispatch(getUser());
  //   setUser(dataUser)
  // }
  // const getDataDoctor = async () => {
  //   await dispatch(getDoctor());
  //   setDoctor(dataDoctor)
  // }
  // const getDataDepartment = async () => {
  //   await dispatch(getDepartment());
  //   setDepartment(dataDepartment)
  // }
  // const getDataBooking = async () => {
  //   await dispatch(getBooking());
  //   setBooking(dataBooking)
  // }
  useEffect(() => {
    const getData = async () => {
      await dispatch(getUser());
      await dispatch(getDoctor());
      await dispatch(getDepartment());
      await dispatch(getBooking());
    }
    getData()
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List data={dataUser} colum={userColumns} title="users" titleApi="user" />} />
              <Route path=":userID" element={<Single inputs={userInputs} title="user" />} />
              <Route path="new" element={<New inputs={userInputs} title="user" />} />
            </Route>
            <Route path="doctors">
              <Route index element={<List data={dataDoctor} colum={userColumns} title="doctors" titleApi="doctor" />} />
              <Route path=":doctorID" element={<Single inputs={doctorInputs} title="doctor" />} />
              <Route path="new" element={<New inputs={doctorInputs} title="doctor" />} />
            </Route>
            <Route path="departments">
              <Route index element={<List data={dataDepartment} colum={departmentColumns} title="departments" titleApi="department" />} />
              <Route path=":doctorID" element={<Single inputs={departmentInputs} title="department" />} />
              <Route path="new" element={<New inputs={departmentInputs} title="department" />} />
            </Route>
            <Route path="bookings">
              <Route index element={<List data={dataBooking} colum={bookingColumns} title="bookings" titleApi="booking" />} />
              <Route path=":doctorID" element={<Single inputs={departmentInputs} title="booking" />} />
              <Route path="new" element={<New inputs={bookingInputs} title="booking" />} />
            </Route>
          </Route>
        </Routes>x
      </BrowserRouter>
    </div>
  );
}

export default App;
