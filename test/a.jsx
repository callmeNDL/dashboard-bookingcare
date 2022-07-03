import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/userSlide';
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import Sidebar from "../../components/sidebar/Sidebar";

import { getMedicine } from '../../redux/medicineSlide';
import getDepartment from '../../redux/departmentSlide';
import { getRole } from '../../redux/roleSlide';
import { getDoctor } from '../../redux/doctorSlide';

const Single = ({ inputs, title }) => {
  const { userID, medicineID, doctorID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //sate
  const [id, setID] = useState('');
  const [data, setData] = useState('');
  const [goitinh, setGioiTinh] = useState();

  //function
  // const getData = async (userID, medicineID) => {
  //   if (doctorID) {
  //     const actionResult = await dispatch(getDoctor());
  //     const dataDoctor = unwrapResult(actionResult);
  //     let currentDoctor = dataDoctor.find((item) => item.id == `${doctorID}`);
  //     if (!currentDoctor) {
  //       return navigate(`/${title}s`)
  //     } else {
  //       setID(doctorID);
  //       setData(currentDoctor);
  //     }
  //   } if (userID) {
  //     const actionResult = await dispatch(getUser());
  //     const dataUser = unwrapResult(actionResult);
  //     let currentUser = dataUser.find((item) => item.id == `${userID}`);
  //     if (!currentUser) {
  //       return navigate(`/${title}s`)
  //     } else {
  //       setID(userID);
  //       setData(currentUser);
  //     }
  //   } if (medicineID) {
  //     const actionResult = await dispatch(getMedicine());
  //     const dataResult = unwrapResult(actionResult);
  //     let currentMedicine = dataResult.find((item) => item.id == `${medicineID}`);
  //     setID(medicineID);
  //     setData(currentMedicine);
  //     if (!currentMedicine) {
  //       return navigate(`/${title}s`)
  //     } else {
  //       setID(userID);
  //       setData(currentMedicine);
  //     }
  //   }
  // }
  const assignDepartment = async () => {
    const departmentResult = await dispatch(getDepartment());
    const dataDepartment = unwrapResult(departmentResult);

    const roleResult = await dispatch(getRole());
    const dataRole = unwrapResult(roleResult);

    const userResult = await dispatch(getUser());
    const dataUser = unwrapResult(userResult);

    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);


    inputs.forEach(input => {
      if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
        input.data = dataDepartment;
      };
      if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
        input.data = dataUser;
        // setUser(dataUser)
      };
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
      if (input.key === "MaChucVu" && Object.keys(dataRole).length !== 0) {
        input.data = dataRole;
      };
    })
  }
  useEffect(() => {
    assignDepartment();
    // getData(userID, medicineID)
  }, [userID, medicineID]);

  const { register, handleSubmit, } = useForm({
    defaultValues: data
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="avatar"
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {
                inputs.map((input) => {
                  if (input.type === "select") {
                    if (input.key === "MaChucVu") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaChucVu} key={option.MaChucVu} selected={option.MaChucVu == data.MaChucVu}>{option.TenChucVu}</option>
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
                        {...register(`${input.key}`, { required: true })}
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
                        {...register(`${input.key}`, { required: true, minLength: 3 })}
                      />
                    </div>
                  }
                })}
              <button type="submit">UPDATE</button>
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
  )
}

export default Single