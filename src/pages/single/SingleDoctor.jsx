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
import { getUser } from '../../redux/userSlide';
import { getDepartment } from '../../redux/departmentSlide';
import { getRole } from '../../redux/roleSlide';
import { getDoctor } from '../../redux/doctorSlide';


const SingleDoctor = ({ inputs, title, img }) => {
  const { userID, doctorID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState("");
  const [goitinh, setGioiTinh] = useState();

  const assignDepartment = async () => {
    const departmentResult = await dispatch(getDepartment());
    const dataDepartment = unwrapResult(departmentResult);

    inputs.forEach(input => {
      if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
        input.data = dataDepartment;
      };
    })
  }

  const getData = async () => {
    if (doctorID) {
      const actionResult = await dispatch(getDoctor());
      const dataDoctor = unwrapResult(actionResult);
      let currentDoctor = dataDoctor.find((item) => item.id == `${doctorID}`);
      if (!currentDoctor) {
        return navigate(`/${title}s`)
      } else {
        setGioiTinh(currentDoctor.GioiTinh)
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
      toast.error("Update fail")
    }
  };

  useEffect(() => {
    assignDepartment();
    getData()
  }, [])

  const dataDoctor = useSelector((state) => state.doctor.data);
  let currentDoctor = dataDoctor.find((item) => item.id == `${doctorID}`);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentDoctor });

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
        </div>
        <div className="bottom">
          {!img
            ? <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>
            : ""}
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {!img
                ? <div className="formInput">
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
                : ""
              }
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
                  if (input.type === "radio") {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <div className="inputRadioWrap">
                        {input.data.map((option) => {
                          return <div className="inputRadio" key={option.key} onChange={() => { setGioiTinh(!goitinh) }}>
                            <label htmlFor="html">{option.value}</label>
                            <input type="radio" name={input.key} value={option.key} checked={option.key == goitinh} {...register(`${input.key}`)} />
                          </div>
                        })}
                      </div>
                    </div>
                  }
                  if (input.type === "email") {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(`${input.key}`,
                          { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })}
                      />
                    </div>
                  }
                  if (input.type === "password") {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        disabled
                        value="aaaaaa"
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
      </div>
    </div>
  );
};

export default SingleDoctor;