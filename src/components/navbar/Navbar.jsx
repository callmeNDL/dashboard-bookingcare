import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useContext, useEffect } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const data = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
  }, [])
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search ...' />
          <SearchIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className='item'>
            {data ? `${data.user.HoTen}` : "admin"}
          </div>
          <div className='item'>
            <img
              src={data ? `${data.user.HinhAnh}` : "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
              alt="img-avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar