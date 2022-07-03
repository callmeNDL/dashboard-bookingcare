import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlide';
import { getBooking } from '../../redux/bookingSlide';
import { getDoctor } from '../../redux/doctorSlide';


const SingleBooking = ({ inputs, title }) => {
  const { bookingID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState("");
  const [id, setID] = useState('');
  const [data, setData] = useState('');

  const assignDepartment = async () => {
    const userResult = await dispatch(getUser());
    const dataUser = unwrapResult(userResult);

    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);

    inputs.forEach(input => {

      if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
        input.data = dataUser;
      };
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
    })
  }

  const getData = async () => {
    if (bookingID) {
      const actionResult = await dispatch(getBooking());
      const dataBooking = unwrapResult(actionResult);
      let currentBooking = dataBooking.find((item) => item.id == `${bookingID}`);
      if (!currentBooking) {
        return navigate(`/${title}s`)
      } else {
        setID(bookingID);
        setData(currentBooking);
      }
    }
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://localhost:8001/api/${title}/update-${title}`, data);
      if (response.data.errCode === '1') {
        toast.error(response.data.errMessage)
      } else {
        toast.error(response.data.errMessage)
        return navigate(`/${title}s`)
      }
    } catch (error) {
      toast.error("No booking update")
    }
  };

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])

  const dataBooking = useSelector((state) => state.booking.data);
  let currentBooking = dataBooking.find((item) => item.id == `${bookingID}`);
  console.log(currentBooking);
  // const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentBooking });
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentBooking });

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {
                inputs.map((input) => {
                  if (input.type === "select") {
                    if (input.key === "MaKhoa") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaKhoa} key={option.MaKhoa}>{option.TenKhoa}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaChucVu") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaChucVu} key={option.MaChucVu}>{option.TenChucVu}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaUser") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaUser} key={option.MaUser}>{option.HoTen}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaBS") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaBS} key={option.MaBS}>{option.HoTen}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "TrangThai") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.value} key={option.key}>{option.value}</option>
                          })}
                        </select>
                      </div>
                    } else {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.key} key={option.key}>{option.value}</option>
                          })}
                        </select>
                      </div>
                    }
                  }

                  return <div className={`formInput ${input.key}`} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      {...register(`${input.key}`, input.validation)}
                    />
                  </div>
                })
              }
              <button type="submit">Send</button>
            </form>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;