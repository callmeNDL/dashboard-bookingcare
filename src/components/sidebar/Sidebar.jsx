import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart, logoutSuccess, logoutFailed } from '../../redux/authSlide';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const dispatchRedux = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatchRedux(logoutStart());
    try {
      dispatchRedux(logoutSuccess());
      navigate("/")
    } catch (error) {
      console.log(error);
      dispatchRedux(logoutFailed());
    }
  }

  const loginRole = useSelector((state) => state.auth.login.currentUser)
  console.log(loginRole);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='logo'>isofhcare</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        {
          loginRole?.MaBS && <ul>
            <p className='title'> MAIN</p>
            <p className='title'>QUẢN LÝ LỊCH KHÁM</p>
            <Link to="/home/doctor" style={{ textDecoration: "none" }}>
              <li>
                <AccessTimeIcon className="icon" />
                <span>Lịch làm việc</span>
              </li>
            </Link>
            <p className='title'>KHÁM BỆNH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>Đặt lịch</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phiếu Khám</span>
              </li>
            </Link>
            <Link to="/medicalTests" style={{ textDecoration: "none" }}>
              <li>
                <FactCheckOutlinedIcon className="icon" />
                <span>Phiếu xét nghiệm</span>
              </li>
            </Link>
            <p className='title'>Dịch vụ</p>
            <Link to="/prescriptions" style={{ textDecoration: "none" }}>
              <li>
                <DescriptionOutlinedIcon className="icon" />
                <span>Đơn thuốc</span>
              </li>
            </Link>
            <Link to="/medicines" style={{ textDecoration: "none" }}>
              <li>
                <MedicationOutlinedIcon className="icon" />
                <span>Thuốc</span>
              </li>
            </Link>

            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>
          </ul>
        }
        {
          loginRole?.MaChucVu === 'AD' && <ul>
            <p className='title'> MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Trang chủ</span>
              </li>
            </Link>
            <p className='title'> LIST</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/doctors" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleIcon className="icon" />
                <span>Bác sĩ</span>
              </li>
            </Link>
            <p className='title'>Phân quyền</p>
            <Link to="/roles" style={{ textDecoration: "none" }}>
              <li>
                <BadgeIcon className="icon" />
                <span>Chức vụ</span>
              </li>
            </Link>
            <Link to="/departments" style={{ textDecoration: "none" }}>
              <li>
                <MeetingRoomIcon className="icon" />
                <span>Khoa</span>
              </li>
            </Link>
            <Link to="/clinics" style={{ textDecoration: "none" }}>
              <li>
                <DoorBackIcon className="icon" />
                <span>Phòng</span>
              </li>
            </Link>
            <Link to="/schedules" style={{ textDecoration: "none" }}>
              <li>
                <CalendarMonthIcon className="icon" />
                <span>Lịch làm việc</span>
              </li>
            </Link>

            <p className='title'>KHÁM BỆNH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>Đặt lịch khám</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phiếu Khám</span>
              </li>
            </Link>
            <Link to="/medicalTests" style={{ textDecoration: "none" }}>
              <li>
                <FactCheckOutlinedIcon className="icon" />
                <span>Phiếu xét nghiệm</span>
              </li>
            </Link>
            <p className='title'>Dịch vụ</p>
            <Link to="/prescriptions" style={{ textDecoration: "none" }}>
              <li>
                <DescriptionOutlinedIcon className="icon" />
                <span>Đơn thuốc</span>
              </li>
            </Link>
            <Link to="/prescriptionDetails" style={{ textDecoration: "none" }}>
              <li>
                <InfoOutlinedIcon className="icon" />
                <span>Chi tiết đơn thuốc</span>
              </li>
            </Link>
            <Link to="/medicines" style={{ textDecoration: "none" }}>
              <li>
                <MedicationOutlinedIcon className="icon" />
                <span>Thuốc</span>
              </li>
            </Link>
            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>
          </ul>
        }
        {
          loginRole?.MaChucVu === 'NV' && <ul>
            <p className='title'> MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Trang chủ</span>
              </li>
            </Link>
            <p className='title'>KHÁM BỆNH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>Đặt lịch khám</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phiếu Khám</span>
              </li>
            </Link>
            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>
          </ul>
        }
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className='colorOption' onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar