import "./single.scss";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getRole } from '../../redux/roleSlide';
import AppLayout from "../../layout/Layout";


const SingleRole = ({ inputs, title }) => {
  const { roleID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setID] = useState('');
  const [data, setData] = useState('');

  const getData = async () => {
    if (roleID) {
      const actionResult = await dispatch(getRole());
      const dataRole = unwrapResult(actionResult);
      let currentRole = dataRole.find((item) => item.id == `${roleID}`);
      if (!currentRole) {
        return navigate(`/${title}s`)
      } else {
        setID(roleID);
        setData(currentRole);
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

  const dataRole = useSelector((state) => state.role.data);
  let currentRole = dataRole.find((item) => item.id == `${roleID}`);
  console.log(currentRole);
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: currentRole });

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

export default SingleRole;