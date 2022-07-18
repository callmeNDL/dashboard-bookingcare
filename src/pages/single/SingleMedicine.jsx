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
import { getMedicine } from '../../redux/medicineSlide';
import AppLayout from "../../layout/Layout";


const SingleMedicine = ({ inputs, title }) => {
  const { medicineID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');

  const getData = async () => {
    if (medicineID) {
      const actionResult = await dispatch(getMedicine());
      const dataMedicine = unwrapResult(actionResult);
      let currentMedicine = dataMedicine.find((item) => item.id == `${medicineID}`);
      if (!currentMedicine) {
        return navigate(`/${title}s`)
      } else {
        setID(medicineID);
        setData(currentMedicine);
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
      toast.error(error.data)
    }
  };

  useEffect(() => {
    getData()
  }, [])

  const dataMedicine = useSelector((state) => state.medicine.data);
  let currentMedicine = dataMedicine.find((item) => item.id == `${medicineID}`);
  console.log(currentMedicine);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentMedicine });

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
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <select name={input.label} {...register(`${input.key}`)}>
                        {input.data.map((option) => {
                          return <option value={option.key} key={option.key}>{option.value}</option>
                        })}
                      </select>
                    </div>
                  }
                  else {
                    if (input.key === "MaThuoc") {
                      return <div className={`formInput ${input.key}`} key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          {...register(`${input.key}`, input.validation)}
                          disabled
                        />
                      </div>
                    } else {
                      return <div className={`formInput ${input.key}`} key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          {...register(`${input.key}`, input.validation)}
                        />
                      </div>
                    }
                  }
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

export default SingleMedicine;