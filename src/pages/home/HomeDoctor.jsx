import './Home.scss'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured'
import Table from '../../components/table/Table';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';


function HomeDoctor() {
  const [bookings, setBookings] = useState({});
  const [dateSelect, setDateSelect] = useState();

  const doctor = useSelector((state) => state.auth.login.currentUser);

  const getBookingWithBS = async () => {
    const res = await axios.get("http://localhost:8001/api/booking/get-with-doctor", {
      params: {
        MaBS: doctor.MaBS,
      },
    });

    setBookings(res.data.bookings);
    return res.data.bookings;
  }

  const onChangeDate = async (date) => {
    setDateSelect(date)
    const a = await getBookingWithBS();
    const currentBooking = a.filter((item) => item.NgayDL === date)
    setBookings(currentBooking);
  };


  useEffect(() => {
    getBookingWithBS();
  }, []);

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer '>
        <Navbar />
        <div className='home-doctor'>
          <div className='home-doctor__title'>Lịch làm việc của bác sĩ</div>
          <div className='widgets'>
            <div className='filter__box'>
              <h2>Tất cả dặt lịch của bác sĩ</h2>
              <div className='filter__box__date'>
                <label className='title'>Chọn ngày Đặt lịch</label>
                <input className='input' type="date" value={dateSelect} onChange={(e) => onChangeDate(e.target.value)} />
              </div>
            </div>
            <Widget type="booking" amount={bookings.length} link="bookings" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeDoctor