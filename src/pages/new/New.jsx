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
import { addMaDL, addMedicalEX } from "../../redux/printSlide";


const New = ({ inputs, title, img, link }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [goitinh, setGioiTinh] = useState(true);
  const [file, setFile] = useState("");
  const [inputData, setInputData] = useState();

  const assignDepartment = async () => {

    if (title === "user") {
      const roleResult = await dispatch(getRole());
      const dataRole = unwrapResult(roleResult);

      inputs.forEach(input => {
        if (input.key === "MaChucVu" && Object.keys(dataRole).length !== 0) {
          input.data = dataRole;
        };
        setInputData(inputs)
      })
    }
    if (title === "doctor") {
      const departmentResult = await dispatch(getDepartment());
      const dataDepartment = unwrapResult(departmentResult);

      inputs.forEach(input => {
        if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
          input.data = dataDepartment;
        };
        setInputData(inputs)
      })
    }
    if (title === "schedule") {
      const doctorResult = await dispatch(getDoctor());
      const dataDoctor = unwrapResult(doctorResult);

      const clinicResult = await dispatch(getClinic());
      const dataClinic = unwrapResult(clinicResult);

      const timetableResult = await dispatch(getTimetable());
      const dataTimetable = unwrapResult(timetableResult);

      inputs.forEach(input => {
        if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
          input.data = dataDoctor;
        };
        if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
          input.data = dataTimetable;
        };
        if (input.key === "MaPhong" && Object.keys(dataClinic).length !== 0) {
          input.data = dataClinic;
        };
        setInputData(inputs)
      })
    }
    if (title === "clinic") {
      const departmentResult = await dispatch(getDepartment());
      const dataDepartment = unwrapResult(departmentResult);
      inputs.forEach(input => {
        if (input.key === "MaKhoa" && Object.keys(dataDepartment).length !== 0) {
          input.data = dataDepartment;
        };
        setInputData(inputs)
      })
    }
    if (title === "booking") {
      const userResult = await dispatch(getUser());
      const dataUser = unwrapResult(userResult);
      const doctorResult = await dispatch(getDoctor());
      const dataDoctor = unwrapResult(doctorResult);

      inputs.forEach(input => {
        if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
          input.data = dataUser;
        };
        if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
          input.data = dataDoctor;
        };
        setInputData(inputs)
      })
    }
    if (title === "booking") {
      const userResult = await dispatch(getUser());
      const dataUser = unwrapResult(userResult);
      const doctorResult = await dispatch(getDoctor());
      const dataDoctor = unwrapResult(doctorResult);

      inputs.forEach(input => {
        if (input.key === "MaUser" && Object.keys(dataUser).length !== 0) {
          input.data = dataUser;
        };
        if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
          input.data = dataDoctor;
        };
        setInputData(inputs)
      })
    }
    if (title === "medicalExamination") {
      const bookingResult = await dispatch(getBooking());
      const dataBooking = unwrapResult(bookingResult);
      const timetableResult = await dispatch(getTimetable());
      const dataTimetable = unwrapResult(timetableResult);
      const clinicResult = await dispatch(getClinic());
      const dataClinic = unwrapResult(clinicResult);


      inputs.forEach(input => {
        if (input.key === "MaDL" && Object.keys(dataBooking).length !== 0) {
          input.data = dataBooking;
        };
        if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
          input.data = dataTimetable;
        };
        if (input.key === "MaPhong" && Object.keys(dataClinic).length !== 0) {
          input.data = dataClinic;
        };
        setInputData(inputs)
      })
    }
    if (title === "medicalTest") {
      const medicalExaminationResult = await dispatch(getMedicalExamination());
      const dataMedicalExamination = unwrapResult(medicalExaminationResult);

      const doctorResult = await dispatch(getDoctor());
      const dataDoctor = unwrapResult(doctorResult);
      inputs.forEach(input => {
        if (input.key === "MaBS" && Object.keys(dataDoctor).length !== 0) {
          input.data = dataDoctor;
        };

        if (input.key === "MaPK" && Object.keys(dataMedicalExamination).length !== 0) {
          input.data = dataMedicalExamination;
        };
        setInputData(inputs)
      })
    }
    if (title === "prescription") {
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
    if (title === "prescriptionDetail") {
      const prescriptionResult = await dispatch(getPrescription());
      const dataPrescription = unwrapResult(prescriptionResult);
      const medicineResult = await dispatch(getMedicine());
      const dataMedicine = unwrapResult(medicineResult);
      inputs.forEach(input => {
        if (input.key === "MaDT" && Object.keys(dataPrescription).length !== 0) {
          input.data = dataPrescription;
        };
        if (input.key === "MaThuoc" && Object.keys(dataMedicine).length !== 0) {
          input.data = dataMedicine;
        };
        setInputData(inputs)
      })
    }
  }

  const onSubmit = async (data) => {
    try {
      if (img === "true") {
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
          } else {
            data.HinhAnh = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360";
          }
          const response = await axios.post(`http://localhost:8001/api/${title}/create-${title}`, data);
          console.log(response);
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
          if (response.data.errCode === 1) {
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
      toast.error(`Không thể thêm ${title}`)
    }
  };

  var uid = Number((new Date().getTime()).toString().slice(-6));

  useEffect(() => {
    assignDepartment();
  }, [title])

  const { register, handleSubmit, formState: { errors } } = useForm();


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{`Thêm mới ${title}`}</h1>
        </div>
        <div className="bottom">
          {img === "true"
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
              {img === "true"
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
                    if (input.key === "MaPK") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.MaPK} key={option.MaPK}>{`${option.MaPK}`}</option>
                          })}
                        </select>
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                            return <option value={option.key} key={option.key}>{`${option.key}`}</option>
                          })}
                        </select>
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
                      </div>
                    } else {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.key} key={option.key}>{option.value}</option>
                          })}
                        </select>
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
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
                      {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
                    </div>
                  }
                  else {
                    if (input.key === "MaUser" || input.key === "MaBS") {
                      return <div className={`formInput formInput--${input.key} formInput--disable`} key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={uid}
                          {...register(`${input.key}`, input.validation)}
                        />
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
                      </div>
                    }
                    else {
                      return <div className={`formInput formInput--${input.key}`} key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          {...register(`${input.key}`, input.validation)}
                        />
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
                      </div>
                    }
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