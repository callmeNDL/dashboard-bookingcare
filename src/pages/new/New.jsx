import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const New = ({ inputs, title }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8001/api/${title}/create-${title}`, data);

      if (response.data.errCode == '1') {
        toast.error(response.data.errMessage)
      } else {
        return navigate(`/${title}s`)
      }
    } catch (error) {
      toast.error(error.data)
    }
  };

  const [file, setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{`Add new ${title}`}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="avatar"
            />
          </div>
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
                inputs.map((input) => {

                  if (input.type == "select") {

                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <select name={input.label} {...register(`${input.key}`)}>
                        {input.data.map((option) => {
                          return <option value={option.key} key={option.key}>{option.value}</option>
                        })}
                      </select>
                    </div>
                  }
                  if (input.type == "radio") {
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
                  if (input.type == "email") {
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
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(`${input.key}`, { required: true, minLength: 3 })}
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