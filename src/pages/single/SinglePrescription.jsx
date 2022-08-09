import "./single.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlide';
import { getPrescription } from '../../redux/prescriptionSlide';
import { getDoctor } from '../../redux/doctorSlide';
import InfoIcon from '@mui/icons-material/Info';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useNavigate, useParams, Link } from "react-router-dom";
import AppLayout from "../../layout/Layout";
import { getDTDetail } from "../../apiServices/presDetailServices";
import { printInvoicePrescriptionFailed, printInvoicePrescriptionStart, printInvoicePrescriptionSuccess, printPrescriptionFailed, printPrescriptionStart, printPrescriptionSuccess } from "../../redux/printSlide";
import { getMedicalExamination } from "../../redux/medicalExamination";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const SinglePrescription = ({ inputs, title }) => {
  const { prescriptionID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [inputData, setInputData] = useState();
  const auth = useSelector((state) => state.auth.login.currentUser);



  const assignDepartment = async () => {
    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);

    const userResult = await dispatch(getUser());
    const dataUser = unwrapResult(userResult);

    const medicalExaminationResult = await dispatch(getMedicalExamination());
    const dataMedicalExamination = unwrapResult(medicalExaminationResult);

    inputs.forEach(input => {
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };

      if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
        input.data = dataUser;
      };
      if (input.key === "MaPK" && Object.keys(dataMedicalExamination).length !== 0) {
        input.data = dataMedicalExamination;
      };
      setInputData(inputs)
    })
  }

  const getData = async () => {
    if (prescriptionID) {
      const actionResult = await dispatch(getPrescription());
      const dataPrescription = unwrapResult(actionResult);
      let currentPrescription = dataPrescription.find((item) => item.id == `${prescriptionID}`);
      if (!currentPrescription) {
        return navigate(`/${title}s`)
      } else {
        setID(prescriptionID);
        setData(currentPrescription);
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

  const handlePrintPrescription = async () => {
    dispatch(printPrescriptionStart())
    const dataPrint = {
      dataDTDetail: await getDTDetail(data.MaDT, dispatch),
      dataDT: data
    }
    if (dataPrint) {
      dispatch(printPrescriptionSuccess(dataPrint));
      navigate('/print-prescription')
    } else {
      dispatch(printPrescriptionFailed())
    }
  }
  const handlePrintPayPrescription = async () => {
    if (currentPrescription.TrangThai !== "confirmed") {
      return toast.error("Trạng thái để in hoá đơn thuốc là confirmed")
    }
    dispatch(printInvoicePrescriptionStart())
    const dataPrint = {
      dataDTDetail: await getDTDetail(data.MaDT, dispatch),
      dataDT: data
    }
    if (dataPrint) {
      console.log(dataPrint);
      dispatch(printInvoicePrescriptionSuccess(dataPrint));
      navigate('/print-invoicePrescription')
    } else {
      dispatch(printInvoicePrescriptionFailed())
    }
  }

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])


  const dataPrescription = useSelector((state) => state.prescription.data);
  let currentPrescription = dataPrescription.find((item) => item.id == `${prescriptionID}`);
  // const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentPrescription });
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentPrescription });

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
                    if (input.key === "MaPK") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPK} key={option.MaPK}>{option.MaPK}</option>
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
            <div className="btn-box">
              <Link to={`/prescriptionDetails/detail/${data?.MaDT}`} className="link">
                <button className="btn"> <InfoIcon className=" icon" /> Chi tiết đơn thuốc</button>
              </Link>
              <button className="btn btn--green" onClick={handlePrintPrescription}> <LocalPrintshopIcon className=" icon" />In đơn thuốc</button>

              <button className={auth.MaBS ? "btn btn--disable" : "btn btn--secondary"} onClick={handlePrintPayPrescription}> <AttachMoneyIcon className=" icon" />In hoá đơn thuốc</button>

            </div>
          </div>

        </div>
      </AppLayout >
    </div >
  );
};

export default SinglePrescription;