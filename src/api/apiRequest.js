import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "../redux/authSlide";
import { useSelector } from "react-redux";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8001/auth/login-user', user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailed)
  }
}
