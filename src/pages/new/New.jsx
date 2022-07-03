import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getUser } from '../../redux/userSlide';
import { getDepartment } from '../../redux/departmentSlide';
import { getRole } from '../../redux/roleSlide';
import { getDoctor } from '../../redux/doctorSlide';
import { getMedicine } from '../../redux/medicineSlide';
import { getPrescription } from '../../redux/prescriptionSlide';
import { getTimetable } from '../../redux/timetableSlide';
import { getClinic } from '../../redux/clinicSlide';
import { getBooking } from '../../redux/bookingSlide';
import { getMedicalExamination } from '../../redux/medicalExamination';


const New = ({ inputs, title, img }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [file, setFile] = useState("");

  const assignDepartment = async () => {
    const departmentResult = await dispatch(getDepartment());
    const dataDepartment = unwrapResult(departmentResult);

    const roleResult = await dispatch(getRole());
    const dataRole = unwrapResult(roleResult);

    const userResult = await dispatch(getUser());
    const dataUser = unwrapResult(userResult);

    const doctorResult = await dispatch(getDoctor());
    const dataDoctor = unwrapResult(doctorResult);

    const medicineResult = await dispatch(getMedicine());
    const dataMedicine = unwrapResult(medicineResult);

    const prescriptionResult = await dispatch(getPrescription());
    const dataPrescription = unwrapResult(prescriptionResult);

    const timetableResult = await dispatch(getTimetable());
    const dataTimetable = unwrapResult(timetableResult);

    const clinicResult = await dispatch(getClinic());
    const dataClinic = unwrapResult(clinicResult);

    const bookingResult = await dispatch(getBooking());
    const dataBooking = unwrapResult(bookingResult);

    const medicalExaminationResult = await dispatch(getMedicalExamination());
    const dataMedicalExamination = unwrapResult(medicalExaminationResult);

    inputs.forEach(input => {
      if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
        input.data = dataDepartment;
      };
      if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
        input.data = dataUser;
      };
      if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
        input.data = dataDoctor;
      };
      if (input.key === "MaChucVu" && Object.keys(dataRole).length !== 0) {
        input.data = dataRole;
      };
      if (input.key === "MaDT" && Object.keys(dataPrescription).length !== 0) {
        input.data = dataPrescription;
      };
      if (input.key === "MaThuoc" && Object.keys(dataMedicine).length !== 0) {
        input.data = dataMedicine;
      };
      if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
        input.data = dataTimetable;
      };
      if (input.key === "MaPhong" && Object.keys(dataClinic).length !== 0) {
        input.data = dataClinic;
      };
      if (input.key === "MaDL" && Object.keys(dataBooking).length !== 0) {
        input.data = dataBooking;
      };
      if (input.key === "MaPK" && Object.keys(dataMedicalExamination).length !== 0) {
        input.data = dataMedicalExamination;
      };
    })
  }


  const onSubmit = async (data) => {
    try {
      if (title === "user" || title === "doctor") {
        const checkExist = await axios.post(`http://localhost:8001/api/${title}/check-${title}`, data);
        if (checkExist.data.errCode === 1) {
          toast.error(checkExist.data.errMessage)
        } else {
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
          const response = await axios.post(`http://localhost:8001/api/${title}/create-${title}`, data);
          if (response.data.errCode === 1) {
            toast.error(response.data.errMessage)
          }
          else {
            return navigate(`/${title}s`)
          }
        }
      } else {
        try {
          const response = await axios.post(`http://localhost:8001/api/${title}/create-${title}`, data);
          if (response.data.errCode === '1') {
            toast.error(response.data.errMessage)
          } else {
            return navigate(`/${title}s`)
          }
          console.log(response);
        } catch (error) {
          toast.error(error.data)
        }
      }
    } catch (error) {
      toast.error(`"No add ${title}`)
    }
  };


  useEffect(() => {
    assignDepartment();
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{`Add new ${title}`}</h1>
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
                : ""}
              {
                inputs.map((input) => {
                  if (input.type === "select") {
                    console.log(input);
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
                    if (input.key === "MaPhong") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPhong} key={option.MaPhong}>{`${option.MaPhong} - ${option.TenPhongKham}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaDL") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaDL} key={option.MaDL}>{`${option.MaDL}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "CaKham") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.CaKham} key={option.CaKham}>{`${option.CaKham} - ${option.ThoiGian}`}</option>
                          })}
                        </select>
                      </div>
                    }
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
                            return <option value={option.MaThuoc} key={option.MaThuoc}>{option.TenThuoc}</option>
                          })}
                        </select>
                      </div>
                    }
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
                    if (input.key === "MaUser") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaUser} key={option.MaUser}>{`${option.MaUser} - ${option.HoTen}`}</option>
                          })}
                        </select>
                      </div>
                    }
                    if (input.key === "MaBS") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaBS} key={option.MaBS}>{`${option.MaBS} - ${option.HoTen}`}</option>
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
                  if (input.type === "radio") {
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <div className="inputRadioWrap">
                        {input.data.map((option) => {
                          return <div className="inputRadio" key={option.key}>
                            <label htmlFor="html">{option.value}</label>
                            <input type="radio" name={input.key} value={option.key} {...register(`${input.key}`)} />
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
                  } else {
                    return <div className={`formInput formInput--${input.key}`} key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(`${input.key}`, input.validation)}
                      />
                    </div>
                  }
                })}

              <button type="submit">Send</button>
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

export default New;