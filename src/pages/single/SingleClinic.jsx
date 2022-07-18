import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartment } from '../../redux/departmentSlide';
import AppLayout from "../../layout/Layout";


const SingleClinic = ({ inputs, title, img }) => {
  const { clinicID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState();

  const assignDepartment = async () => {
    const departmentResult = await dispatch(getDepartment());
    const dataDepartment = unwrapResult(departmentResult);

    inputs.forEach(input => {
      if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
        input.data = dataDepartment;
      };
      setInputData(inputs)
    })
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
    assignDepartment();
  }, [])

  const dataClinic = useSelector((state) => state.clinic.data);
  let currentClinic = dataClinic.find((item) => item.id == `${clinicID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentClinic });

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
                  }
                  else {
                    if (input.key === "MaChucVu") {
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
                })}
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

export default SingleClinic;