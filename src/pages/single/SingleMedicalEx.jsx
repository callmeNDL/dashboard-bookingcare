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
import { getTimetable } from '../../redux/timetableSlide';
import { getBooking } from '../../redux/bookingSlide';
import { getMedicalExamination } from "../../redux/medicalExamination";

const SingleMedicalExamination = ({ inputs, title }) => {
  const { medicalExaminationID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');

  const assignDepartment = async () => {
    const timetableResult = await dispatch(getTimetable());
    const dataTimetable = unwrapResult(timetableResult);

    const bookingResult = await dispatch(getBooking());
    const dataBooking = unwrapResult(bookingResult);

    inputs.forEach(input => {
      if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
        input.data = dataTimetable;
      };
      if (input.key === "MaDL" && Object.keys(dataBooking).length !== 0) {
        input.data = dataBooking;
      };

    })
  }

  const getData = async () => {
    if (medicalExaminationID) {
      const actionResult = await dispatch(getMedicalExamination());
      const dataMedicalExamination = unwrapResult(actionResult);
      let currentMedicalExamination = dataMedicalExamination.find((item) => item.id == `${medicalExaminationID}`);
      if (!currentMedicalExamination) {
        return navigate(`/${title}s`)
      } else {
        setID(medicalExaminationID);
        setData(currentMedicalExamination);
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
      toast.error("No medicalExamination update")
    }
  };

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])

  console.log(inputs);
  const dataMedicalExamination = useSelector((state) => state.medicalExamination.data);
  let currentMedicalExamination = dataMedicalExamination.find((item) => item.id == `${medicalExaminationID}`);
  // const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicalExamination });
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicalExamination });

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
                    if (input.key === "MaDL") {
                      return <div className={`formInput ${title}-update--${input.key}`} key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaDL} key={option.MaDL}>{`${option.MaDL}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "CaKham") {
                      return <div className={`formInput ${title}-update--${input.key} `} key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.CaKham} key={option.CaKham}>{`${option.CaKham} - ${option.ThoiGian}`}</option>
                          })}
                        </select>
                      </div>
                    } else {
                      return <div className={`formInput ${title}-update--${input.key}`} key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.key} key={option.key} >{option.value}</option>
                          })}
                        </select>
                      </div>
                    }
                  }

                  return <div className={`formInput ${title}-update--${input.key}`} key={input.id}>
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

export default SingleMedicalExamination;