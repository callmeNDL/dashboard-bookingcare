import "./single.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/userSlide';
import { getRole } from '../../redux/roleSlide';
import AppLayout from "../../layout/Layout";
import { updateUser } from "../../apiServices/userServices";


const Single = ({ inputs, title, img }) => {
  const { userID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState("");
  const [goitinh, setGioiTinh] = useState(false);
  const [update, setUpdate] = useState(false);
  const [inputData, setInputData] = useState([]);

  const assignDepartment = async () => {
    const roleResult = await dispatch(getRole());
    const dataRole = unwrapResult(roleResult);

    inputs.forEach(input => {
      if (input.key === "MaChucVu" && Object.keys(dataRole).length !== 0) {
        input.data = dataRole;
      };
      setInputData(inputs)
    })
  }

  const getData = async () => {
    if (userID) {
      const actionResult = await dispatch(getUser());
      const dataUser = unwrapResult(actionResult);
      let currentUser = dataUser.find((item) => item.id == `${userID}`);
      if (!currentUser) {
        return navigate(`/${title}s`)
      } else {
        setGioiTinh(currentUser.GioiTinh)
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
        data.HinhAnh = urlHinhAnh;
      }
      await updateUser(data, navigate);

      setUpdate(false);
    } catch (error) {
      setUpdate(false);
      toast.error(error.data)
    }
  };

  useEffect(() => {
    assignDepartment();
    getData();
  }, [])


  const dataUser = useSelector((state) => state.user.data);
  let currentUser = dataUser.find((item) => item.id == `${userID}`)
  const { register, handleSubmit, errors } = useForm({ defaultValues: currentUser });

  return (
    <div className="single">
      <AppLayout>
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
        </div>
        <div className="bottom">
          {!file
            ? <div className="left">
              <img
                src={
                  currentUser?.HinhAnh
                    ? currentUser?.HinhAnh
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>
            : <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="avatar"
              />
            </div>}
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              {
                inputData.map((input) => {
                  if (input.type === "select") {
                    if (input.key === "MaChucVu") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaChucVu} key={option.MaChucVu}>{option.TenChucVu}</option>
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
                  if (input.type === "password") {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        disabled
                        value="hashPassword"
                      />
                    </div>
                  } else {
                    return <div className={input.key === "HinhAnh" ? `formInput--disable }` : `formInput ${input.key}`} key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(`${input.key}`, input.validation)}
                      />
                    </div>
                  }
                })
              }
              <button type="submit" className={update ? "btn-update--loading" : "btn-update"}>UPDATE</button>
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

export default Single;