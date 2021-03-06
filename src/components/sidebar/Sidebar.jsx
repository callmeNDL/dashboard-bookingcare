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
            <p className='title'>QU???N L?? L???CH KH??M</p>
            <Link to="/home/doctor" style={{ textDecoration: "none" }}>
              <li>
                <AccessTimeIcon className="icon" />
                <span>L???ch l??m vi???c</span>
              </li>
            </Link>
            <p className='title'>KH??M B???NH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>?????t l???ch</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phi???u Kh??m</span>
              </li>
            </Link>
            <Link to="/medicalTests" style={{ textDecoration: "none" }}>
              <li>
                <FactCheckOutlinedIcon className="icon" />
                <span>Phi???u x??t nghi???m</span>
              </li>
            </Link>
            <p className='title'>D???ch v???</p>
            <Link to="/prescriptions" style={{ textDecoration: "none" }}>
              <li>
                <DescriptionOutlinedIcon className="icon" />
                <span>????n thu???c</span>
              </li>
            </Link>
            <Link to="/medicines" style={{ textDecoration: "none" }}>
              <li>
                <MedicationOutlinedIcon className="icon" />
                <span>Thu???c</span>
              </li>
            </Link>

            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Th??ng tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>????ng xu???t</span>
            </li>
          </ul>
        }
        {
          loginRole?.MaChucVu === 'AD' && <ul>
            <p className='title'> MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Trang ch???</span>
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
                <span>B??c s??</span>
              </li>
            </Link>
            <p className='title'>Ph??n quy???n</p>
            <Link to="/roles" style={{ textDecoration: "none" }}>
              <li>
                <BadgeIcon className="icon" />
                <span>Ch???c v???</span>
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
                <span>Ph??ng</span>
              </li>
            </Link>
            <Link to="/schedules" style={{ textDecoration: "none" }}>
              <li>
                <CalendarMonthIcon className="icon" />
                <span>L???ch l??m vi???c</span>
              </li>
            </Link>

            <p className='title'>KH??M B???NH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>?????t l???ch kh??m</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phi???u Kh??m</span>
              </li>
            </Link>
            <Link to="/medicalTests" style={{ textDecoration: "none" }}>
              <li>
                <FactCheckOutlinedIcon className="icon" />
                <span>Phi???u x??t nghi???m</span>
              </li>
            </Link>
            <p className='title'>D???ch v???</p>
            <Link to="/prescriptions" style={{ textDecoration: "none" }}>
              <li>
                <DescriptionOutlinedIcon className="icon" />
                <span>????n thu???c</span>
              </li>
            </Link>
            <Link to="/prescriptionDetails" style={{ textDecoration: "none" }}>
              <li>
                <InfoOutlinedIcon className="icon" />
                <span>Chi ti???t ????n thu???c</span>
              </li>
            </Link>
            <Link to="/medicines" style={{ textDecoration: "none" }}>
              <li>
                <MedicationOutlinedIcon className="icon" />
                <span>Thu???c</span>
              </li>
            </Link>
            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Th??ng tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>????ng xu???t</span>
            </li>
          </ul>
        }
        {
          loginRole?.MaChucVu === 'NV' && <ul>
            <p className='title'> MAIN</p>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Trang ch???</span>
              </li>
            </Link>
            <p className='title'>KH??M B???NH</p>
            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <li>
                <BookmarkAddIcon className="icon" />
                <span>?????t l???ch kh??m</span>
              </li>
            </Link>
            <Link to="/medicalExaminations" style={{ textDecoration: "none" }}>
              <li>
                <FeaturedPlayListIcon className="icon" />
                <span>Phi???u Kh??m</span>
              </li>
            </Link>
            <p className='title'> USER</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Th??ng tin</span>
            </li>
            <li onClick={handleLogout} >
              <ExitToAppIcon className="icon" />
              <span>????ng xu???t</span>
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