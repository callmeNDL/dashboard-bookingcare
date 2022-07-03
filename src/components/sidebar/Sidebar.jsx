import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link } from 'react-router-dom';
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

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='logo'>admin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'> MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
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
              <span>Doctors</span>
            </li>
          </Link>
          <Link to="/schedules" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthIcon className="icon" />
              <span>Lịch làm việc</span>
            </li>
          </Link>
          <Link to="/departments" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Department</span>
            </li>
          </Link>
          <Link to="/clinics" style={{ textDecoration: "none" }}>
            <li>
              <DoorBackIcon className="icon" />
              <span>Clinic</span>
            </li>
          </Link>
          <p className='title'> BOOKING</p>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <BookmarkAddIcon className="icon" />
              <span>Booking</span>
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
          <p className='title'> GROUP</p>
          <Link to="/roles" style={{ textDecoration: "none" }}>
            <li>
              <BadgeIcon className="icon" />
              <span>Role</span>
            </li>
          </Link>

          <p className='title'> SERVICE</p>
          <Link to="/prescriptions" style={{ textDecoration: "none" }}>
            <li>
              <DescriptionOutlinedIcon className="icon" />
              <span>Prescriptions</span>
            </li>
          </Link>
          <Link to="/prescriptionDetails" style={{ textDecoration: "none" }}>
            <li>
              <InfoOutlinedIcon className="icon" />
              <span>Prescriptions Detail</span>
            </li>
          </Link>
          <Link to="/medicines" style={{ textDecoration: "none" }}>
            <li>
              <MedicationOutlinedIcon className="icon" />
              <span>Medicine</span>
            </li>
          </Link>

          <p className='title'> USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption' onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className='colorOption' onClick={() => dispatch({ type: "DARK" })}></div>
      </div>
    </div>
  )
}

export default Sidebar