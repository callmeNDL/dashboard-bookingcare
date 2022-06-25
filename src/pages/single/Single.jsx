// import "./single.scss";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from "react";

// const Single = (props) => {
//   let navigate = useNavigate();
//   let { userID } = useParams();
//   const [data, setData] = useState();
//   const dataUser = useSelector((state) => state.user.data);
//   let user = null;
//   user = dataUser.find((item) => item.id == `${userID}`)
//   if (!user) {
//     navigate('/users');
//   } else {
//     console.log(userID, user);
//   }
//   useEffect(() => {

//   }, [data])

//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div className="top">
//           <div className="left">
//             <div className="editButton">Edit</div>
//             <h1 className="title">Information</h1>
//             <div className="item">
//               <img
//                 src={user.HinhAnh}
//                 alt=""
//                 className="itemImg"
//               />
//               <div className="details">
//                 <h1 className="itemTitle">{user.HoTen}</h1>
//                 <div className="detailItem">
//                   <span className="itemKey">Email:</span>
//                   <span className="itemValue">{user.email}</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Phone:</span>
//                   <span className="itemValue">{user.SDT}</span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Address:</span>
//                   <span className="itemValue">
//                     {user.DiaChi}
//                   </span>
//                 </div>
//                 <div className="detailItem">
//                   <span className="itemKey">Country:</span>
//                   <span className="itemValue">USA</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         {/* <div className="bottom">
//           <h1 className="title">Last Transactions</h1>
//           <List />
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Single;
import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';


const Single = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [department, setDepartment] = useState("");
  let { userID } = useParams();
  const [data, setData] = useState();
  const dataUser = useSelector((state) => state.user.data);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const departmentData = useSelector((state) => state.department.data);

  const assignDepartment = (department) => {
    inputs.forEach(input => {
      if (input.key === "MaKhoa" && Object.keys(department).length !== 0) {
        input.data = department;
        setDepartment(department)
      }
    })
  }

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`http://localhost:8001/api/${title}/create-${title}`, data);
      if (response.data.errCode === '1') {
        toast.error(response.data.errMessage)
      } else {
        return navigate(`/${title}s`)
      }
    } catch (error) {
      toast.error(error.data)
    }
    // console.log(data);
  };

  let user = dataUser.find((item) => item.id == `${userID}`)
  useEffect(() => {
    assignDepartment(departmentData);
  }, [department])


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{`Edit ${title}`}</h1>
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
                  console.log(user);
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
                    return <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        value={user.MaUser}
                        {...register(`${input.key}`, { required: true, minLength: 3 })}
                      />
                    </div>
                  }
                })}


              <button type="submit">UP</button>
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

export default Single;