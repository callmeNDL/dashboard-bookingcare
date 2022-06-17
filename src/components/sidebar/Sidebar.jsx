import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../redux/userSlide'

const Sidebar = () => {
  const dispatchRD = useDispatch();
  const { dispatch } = useContext(DarkModeContext);
  const dataUser = useSelector((state) => state.user.data);


  const handleGetUser = () => {
    const user = dataUser.find((item) => item.id == "21")
    dispatchRD(getCurrentUser(user))
  }

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
          <Link to="/departments" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Department</span>
            </li>
          </Link>
          <p className='title'> USEFUL</p>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className='title'> SERVICE</p>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notification</span>
          </li>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Setting</span>
          </li>
          <p className='title'> USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          <li> <div onClick={handleGetUser}>get user</div></li>
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