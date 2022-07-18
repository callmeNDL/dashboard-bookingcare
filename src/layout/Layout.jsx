import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { useNavigate, } from "react-router-dom";
import { useSelector } from 'react-redux';

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const login = useSelector((state) => state.auth.login.currentUser);
  if (!login) {
    navigate('/')
  }
  return (
    <div>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  )
};

export default AppLayout;
