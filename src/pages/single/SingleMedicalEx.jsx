import "./single.scss";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
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
import { getClinic } from "../../redux/clinicSlide";
import AppLayout from "../../layout/Layout";
import { addMaDL, printMedicalResultSuccess } from "../../redux/printSlide";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const SingleMedicalExamination = ({ inputs, title }) => {
  const { medicalExaminationID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [inputData, setInputData] = useState();
  const auth = useSelector((state) => state.auth.login.currentUser);

  const dataMedicalExamination = useSelector((state) => state.medicalExamination.data);
  let currentMedicalExamination = dataMedicalExamination.find((item) => item.id == `${medicalExaminationID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicalExamination });
  const assignDepartment = async () => {
    const bookingResult = await dispatch(getBooking());
    const dataBooking = unwrapResult(bookingResult);
    const timetableResult = await dispatch(getTimetable());
    const dataTimetable = unwrapResult(timetableResult);
    const clinicResult = await dispatch(getClinic());
    const dataClinic = unwrapResult(clinicResult);

    inputs.forEach(input => {
      if (input.key === "MaDL" && Object.keys(dataBooking).length !== 0) {
        input.data = dataBooking;
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

  const handlePrintMedicalEX = () => {
    if (title === 'medicalExamination') {
      dispatch(addMaDL(data.MaDL))
      return navigate(`/print-medicalEx`)
    }
  }

  const handlePrintMedicalResult = () => {
    dispatch(printMedicalResultSuccess(currentMedicalExamination))
    return navigate(`/print-medicalResult`)
  }

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])


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
                    if (input.key === "MaPhong") {
                      return <div className={`formInput ${title}-update--${input.key} `} key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPhong} key={option.MaPhong}>{`${option.MaPhong} - ${option.TenPhongKham}`}</option>
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
              <button type="submit" className="btn-update">UPDATE</button>
            </form>

            <div className="btn-box">
              {
                auth?.MaBS
                  ? ""
                  : <button
                    className="btn btn--green"
                    onClick={handlePrintMedicalEX}>
                    <LocalPrintshopIcon className=" icon" />In phiếu khám
                  </button>
              }
              {currentMedicalExamination?.KetQua.length !== 0
                ? <button className="btn btn--primary" onClick={handlePrintMedicalResult}> <ExitToAppIcon className=" icon" />In kết quả khám bệnh</button>
                : ""}
            </div>
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
      </AppLayout >
    </div >
  );
};

export default SingleMedicalExamination;