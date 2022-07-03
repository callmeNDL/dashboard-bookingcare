import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getMedicalExamination } from '../../redux/medicalExamination';
import { getMedicalTest } from '../../redux/medicalTest';
import { getDoctor } from '../../redux/doctorSlide';


const SingleMedicalTest = ({ inputs, title }) => {
  const { medicalTestID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');

  const assignDepartment = async () => {

    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);

    const medicalExaminationResult = await dispatch(getMedicalExamination());
    const dataMedicalExamination = unwrapResult(medicalExaminationResult);

    inputs.forEach(input => {

      if (input.key === "MaPK" && Object.keys(dataMedicalExamination).length !== 0) {
        input.data = dataMedicalExamination;
      };
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
    })
  }

  const getData = async () => {
    if (medicalTestID) {
      const actionResult = await dispatch(getMedicalTest());
      const dataMedicalTest = unwrapResult(actionResult);
      let currentMedicalTest = dataMedicalTest.find((item) => item.id == `${medicalTestID}`);
      if (!currentMedicalTest) {
        return navigate(`/${title}s`)
      } else {
        setID(medicalTestID);
        setData(currentMedicalTest);
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
      toast.error("No medicalTest update")
    }
  };

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])

  const dataMedicalTest = useSelector((state) => state.medicalTest.data);
  let currentMedicalTest = dataMedicalTest.find((item) => item.id == `${medicalTestID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicalTest });

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
                    if (input.key === "MaPK") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPK} key={option.MaPK}>{`${option.MaPK}`}</option>
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

export default SingleMedicalTest;