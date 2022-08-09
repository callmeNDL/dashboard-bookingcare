import "./single.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams, Link } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { getMedicalExamination } from '../../redux/medicalExamination';
import { getMedicalTest } from '../../redux/medicalTest';
import { getDoctor } from '../../redux/doctorSlide';
import AppLayout from "../../layout/Layout";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { printMedicalEXStart, printMedicalEXSuccess } from "../../redux/printSlide";
import { getBookingWithMaDL } from "../../apiServices/bookingServices";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const SingleMedicalTest = ({ inputs, title }) => {
  const { medicalTestID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [file, setFile] = useState("");
  const [update, setUpdate] = useState(false);

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
      setUpdate(true);
      let urlHinhAnh = '';
      if (file.length !== 0) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "rl8qs3p5");
        await axios.post("https://api.cloudinary.com/v1_1/nguyen-duc-long/image/upload", formData).then((response) => {
          urlHinhAnh = response.data.secure_url;
        });
      }
      if (urlHinhAnh.length !== 0) {
        data.HinhAnhXN = urlHinhAnh;
      }
      const response = await axios.put(`http://localhost:8001/api/${title}/update-${title}`, data);
      if (response.data.errCode === '1') {
        setUpdate(false);
        toast.error(response.data.errMessage)
      } else {
        toast.error(response.data.errMessage)
        setUpdate(false);

        return navigate(`/${title}s`)
      }
    } catch (error) {
      setUpdate(false);

      toast.error("No medicalTest update")
    }
  };

  const handlePrintMedicalEX = async () => {
    let dataPrint = {
      data: data,
      dataBooking: null
    }
    dispatch(printMedicalEXStart())
    if (data.TrangThai === 'confirmed') {
      const dataBooking = await getBookingWithMaDL(data.MedicalExamination?.MaDL)
      dataPrint.dataBooking = dataBooking;
      dispatch(printMedicalEXSuccess(dataPrint))
      navigate('/print-medicalTest')
    } else {
      toast.error(`Trạng thái ${data.TrangThai} không thể in`)
      // dispatch(printPrescriptionFailed())
    }
  }


  useEffect(() => {
    getData()
    assignDepartment();
  }, [])

  const dataMedicalTest = useSelector((state) => state.medicalTest.data);
  let currentMedicalTest = dataMedicalTest.find((item) => item.id == `${medicalTestID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicalTest });

  return (
    <div className="single">
      <AppLayout>
        <div className="top">
          <h1>{`Chi tiết phiếu xét nghiệm`}</h1>
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
              <button type="submit" className={update ? "btn-update--loading" : "btn-update"}>UPDATE</button>
            </form>
            <div className="btn-box">
              <button className="btn btn--green" onClick={handlePrintMedicalEX}> <LocalPrintshopIcon className=" icon" />In phiếu xét nghiệm</button>
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
        <div className="bottom">
          <div className="formInput">
            <label htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>
          {!file
            ? <div className="">
              <img
                src={
                  currentMedicalTest?.HinhAnhXN
                    ? currentMedicalTest?.HinhAnhXN
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>
            : <div className="">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>}
        </div>
      </AppLayout>
    </div>
  );
};

export default SingleMedicalTest;