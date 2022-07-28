import "./single.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicine } from '../../redux/medicineSlide';
import { getPrescription } from '../../redux/prescriptionSlide';
import { getPrescriptionDetail } from "../../redux/prescriptionDetailSlide";
import AppLayout from "../../layout/Layout";

const SinglePrescription = ({ inputs, title }) => {
  const { preDetailID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [inputData, setInputData] = useState();
  const assignDepartment = async () => {
    const userResult = await dispatch(getPrescription());
    const dataUser = unwrapResult(userResult);

    const doctorResult = await dispatch(getMedicine());
    const dataDoctor = unwrapResult(doctorResult);

    inputs.forEach(input => {
      if (input.key === "MaDT" && Object.keys(dataUser).length !== 0) {
        input.data = dataUser;
      };
      if (input.key === "MaThuoc" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
      setInputData(inputs)
    })
  }

  const getData = async () => {
    if (preDetailID) {
      const actionResult = await dispatch(getPrescriptionDetail());
      const dataPreDetail = unwrapResult(actionResult);
      let currentPreDetail = dataPreDetail.find((item) => item.id == `${preDetailID}`);
      if (!currentPreDetail) {
        return navigate(`/${title}s`)
      } else {
        setID(preDetailID);
        setData(currentPreDetail);
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
      toast.error("No prescriptionDetail update")
    }
  };

  useEffect(() => {
    getData()
    assignDepartment();
  }, [])

  console.log(inputs);

  const dataPreDetail = useSelector((state) => state.prescriptionDetail.data);
  let currentPreDetail = dataPreDetail.find((item) => item.id == `${preDetailID}`);
  // const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentPreDetail });
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentPreDetail });

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

                    if (input.key === "MaDT") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaDT} key={option.MaDT}>{option.MaDT}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaThuoc") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaThuoc} key={option.MaThuoc}>{`${option.MaThuoc} - ${option.TenThuoc}`}</option>
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
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default SinglePrescription;