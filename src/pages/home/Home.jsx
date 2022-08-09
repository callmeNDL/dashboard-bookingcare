import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const loginRole = useSelector((state) => state.auth.login.currentUser)



  const [users, setUsers] = useState({});
  const [doctors, setDoctors] = useState({});
  const [bookings, setBookings] = useState({});
  const [medicines, setMedicines] = useState({});


  const getAllUser = async () => {
    const res = await axios.get("http://localhost:8001/api/user?id=ALL");
    setUsers(res.data.users);
  }
  const getAllDoctors = async () => {
    const res = await axios.get("http://localhost:8001/api/doctor?id=ALL");
    setDoctors(res.data.doctors);
  }
  const getAllBookings = async () => {
    const res = await axios.get("http://localhost:8001/api/booking?id=ALL");
    setBookings(res.data.bookings);
  }
  const getAllMedicines = async () => {
    const res = await axios.get("http://localhost:8001/api/medicine?id=ALL");
    setMedicines(res.data.medicines);
  }

  useEffect(() => {
    if (loginRole.MaBS) { return navigate("/home/doctor") }
    getAllUser();
    getAllDoctors();
    getAllBookings()
    getAllMedicines();
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type="user" amount={users.length} link="users" />
          <Widget type="doctor" amount={doctors.length} link="doctors" />
          <Widget type="booking" amount={bookings.length} link="bookings" />
          <Widget type="medicine" amount={medicines.length} link="medicines" />
        </div>
      </div>

    </div>
  )
}

export default Home