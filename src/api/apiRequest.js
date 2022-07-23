import axios from "axios";
import { toast } from "react-toastify";
import { loginFailed, loginStart, loginSuccess } from "../redux/authSlide";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8001/auth/login-admin', user);
    if (res.data.errCode === 0) {
      dispatch(loginSuccess(res.data.user));
      navigate('/home')
    } else {
      dispatch(loginFailed())
      toast.error(res.data.message)
    }

  } catch (error) {
    dispatch(loginFailed())
  }
}
