import "./single.scss";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getTimetable } from '../../redux/timetableSlide';
import { getClinic } from '../../redux/clinicSlide';
import { getDoctor } from '../../redux/doctorSlide';
import { getSchedule } from '../../redux/scheduleSlide';
import AppLayout from "../../layout/Layout";

const SingleSchedule = ({ inputs, title }) => {
  const { scheduleID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [inputData, setInputData] = useState();


  const assignData = async () => {
    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);

    const clinicResult = await dispatch(getClinic());
    const dataClinic = unwrapResult(clinicResult);

    const timetableResult = await dispatch(getTimetable());
    const dataTimetable = unwrapResult(timetableResult);

    inputs.forEach(input => {
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
      if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
        input.data = dataTimetable;
      };
      if (input.key === "MaPhong" && Object.keys(dataClinic).length !== 0) {
        input.data = dataClinic;
      };
      setInputData(inputs)
    })
  }

  const getData = async () => {
    if (scheduleID) {
      const actionResult = await dispatch(getSchedule());
      const dataSchedule = unwrapResult(actionResult);
      let currentSchedule = dataSchedule.find((item) => item.id == `${scheduleID}`);
      if (!currentSchedule) {
        return navigate(`/${title}s`)
      } else {
        setID(scheduleID);
        setData(currentSchedule);
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
      toast.error("No prescription update")
    }
  };

  useEffect(() => {
    getData();
    assignData();
  }, [])

  const dataSchedule = useSelector((state) => state.schedule.data);
  let currentSchedule = dataSchedule.find((item) => item.id == `${scheduleID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentSchedule });

  return (
    <div className="single">
      <AppLayout>
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {
                inputs.map((input) => {
                  if (input.type === "select") {
                    if (input.key === "MaPhong") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPhong} key={option.MaPhong}>{`${option.MaPhong} - ${option.TenPhongKham}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "CaKham") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.CaKham} key={option.CaKham}>{`${option.CaKham} - ${option.ThoiGian}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaBS") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaBS} key={option.MaBS}>{`${option.MaBS} - ${option.HoTen}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    else {
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

                  return <div className={`formInput ${input.key}--update`} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      {...register(`${input.key}`, input.validation)}
                    />
                  </div>
                })
              }
              <button type="submit" className="btn-update">UPDATE</button>
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
      </AppLayout>
    </div>
  );
};

export default SingleSchedule;