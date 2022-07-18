import './Login.scss'
import { useForm } from "react-hook-form";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../api/apiRequest';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const res = useSelector((state) => state.auth.login?.currentUser);

  const onSubmit = async (data) => {
    loginUser(data, dispatch, navigate);
  }

  useEffect(() => {
    if (res) {
      if (res.errCode === "0") {
        return navigate("/home");
      } else {
        toast.error(res.message);
      }
    }
  }, [res])

  return (
    <div className='login'>
      <section className="login-container">
        <div className="login-title">Đăng nhập</div>
        <form className='from-login' onSubmit={handleSubmit(onSubmit)}>
          <label>TÊN ĐĂNG NHẬP</label>
          <div className='username-box'>
            <input type="text" className='username' placeholder="Nhập tên đăng nhập" {...register("username", { required: "Nhập tên đăng nhập." })} />
          </div>
          <label>MẬT KHẨU</label>
          <div className='password-box'>
            <input type={showPassword ? "text" : "password"} placeholder="Nhập mật khẩu" {...register("password", { required: "Nhập mật khẩu." })} />
            <div className='icon-box' onClick={handleShowPassword}>{showPassword ? <RemoveRedEyeIcon className='icon' /> : <VisibilityOffIcon className='icon' />}</div>
          </div>
          <div className="role-box">
            <label>CHỨC VỤ</label>
            <select {...register("ChucVu")} className="role-login">
              <option value="AD" className='role-item'>Nhân viên</option>
              <option value="BS" className='role-item'>Bác sĩ</option>
            </select>
          </div>
          {errors[`username`]?.message && <p className="login-error">{errors[`username`]?.message}</p>}
          {errors[`password`]?.message && <p className="login-error">{errors[`password`]?.message}</p>}
          <div className='link-submit'><button type="submit" > Đăng nhập </button></div>
        </form>
        <div className="login-register"> Don't have an account yet? </div>
        <div className="login-register-link" to="/register">Register one for free </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </section>
    </div>
  )
}

export default Login