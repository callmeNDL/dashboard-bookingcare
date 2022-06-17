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
import { doctorInputs, userInputs, departmentInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useSelector } from 'react-redux';
import { userColumns, departmentColumns } from './datatablesource';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/userSlide'
import { getDoctor } from './redux/doctorSlide'
import { getDepartment } from './redux/departmentSlide'
import GetDataDepartment from './formSource'


function App() {
  const dataDoctor = useSelector((state) => state.doctor.data);
  const dataUser = useSelector((state) => state.user.data);
  const departmentData = useSelector((state) => state.department.data);

  const { darkMode } = useContext(DarkModeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      await dispatch(getUser());
      await dispatch(getDoctor());
      await dispatch(getDepartment())
    }
    getData();
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List data={dataUser} colum={userColumns} title="users" />} />
              <Route path=":userID" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="user" />} />
            </Route>
            <Route path="doctors">
              <Route index element={<List data={dataDoctor} colum={userColumns} title="doctors" />} />
              <Route path=":doctorID" element={<Single />} />
              <Route path="new" element={<New inputs={doctorInputs} title="doctor" />} />
            </Route>
            <Route path="departments">
              <Route index element={<List data={departmentData} colum={departmentColumns} title="department" />} />
              <Route path=":doctorID" element={<Single />} />
              <Route path="new" element={<New inputs={departmentInputs} title="department" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
