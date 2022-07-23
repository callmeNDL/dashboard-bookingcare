import "./new.scss";
import { DataGrid } from '@mui/x-data-grid';
import { scheduleColumns } from '../../datatablesource'
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';

import AppLayout from "../../layout/Layout";
import { getClinic } from "../../redux/clinicSlide";
import { useDispatch, useSelector } from "react-redux";
import { getTimetable } from "../../redux/timetableSlide";
import { createSchedule, deleteSchedule, getScheduleWithBS, updateSchedule } from "../../apiServices/doctorSevices";

function NewShedule({ inputs }) {
  const { MaBS } = useParams();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({});
  const [dataSchedule, setDataSchedule] = useState({});
  const [action, setAction] = useState("CREATE");

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      MaBS: MaBS,
    }
  });

  const assignData = async () => {
    const clinicResult = await dispatch(getClinic());
    const dataClinic = unwrapResult(clinicResult);

    const timetableResult = await dispatch(getTimetable());
    const dataTimetable = unwrapResult(timetableResult);

    inputs.forEach(input => {
      if (input.key === "CaKham" && Object.keys(dataTimetable).length !== 0) {
        input.data = dataTimetable;
      };
      if (input.key === "MaPhong" && Object.keys(dataClinic).length !== 0) {
        input.data = dataClinic;
      };
      setInputData(inputs)
    })
  }

  const getData = async () => {
    setDataSchedule(await getScheduleWithBS(MaBS));
  }


  const handleDelete = async (id) => {
    await deleteSchedule(id);
    getData();
  }

  const handleUpdate = async (data) => {
    setAction("UPDATE");
    reset(data)
  }

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <div className='viewButton' onClick={() => { handleUpdate(params.row) }}>Xem</div>
            <div className='deleteButton' onClick={() => { handleDelete(params.id) }}>Xoá</div>
          </div>
        )
      }
    }
  ]

  useEffect(() => {
    assignData();
    getData();
  }, [])

  const resetFrom = () => {
    reset({
      CaKham: inputs[2].data[0].CaKham,
      MaBS: MaBS,
      MaPhong: inputs[1].data[0].MaPhong,
      NgayKham: ""
    });
    setAction("CREATE")
  }

  const onSubmit = async (data) => {
    if (action === "CREATE") {
      const res = await createSchedule(data);
      if (res.errCode === 0) {
        getData();
        toast.success(res.errMessage)
      }
    }
    else {
      const res = await updateSchedule(data);
      if (res.errCode === 0) {
        getData();
        resetFrom();
        toast.success(res.errMessage)
      }
    }
  }


  return (
    <div className="single">
      <AppLayout>
        <div className="top">
          <h1>{`Lịch làm việc bác sĩ`}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {
                inputs.map((input) => {
                  if (input.type === "select") {
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
                    if (input.key === "CaKham") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`)}>
                          {input.data.map((option) => {
                            return <option value={option.CaKham} key={option.CaKham}>{`${option.CaKham} - ${option.ThoiGian}`}</option>
                          })}
                        </select>
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}

                      </div>
                    }
                    if (input.key === "MaBS") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={MaBS}
                          disabled
                          {...register(`${input.key}`)}
                        />
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
                        {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}
                      </div>
                    }
                  }

                  return <div className={`formInput ${input.key}--update`} key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      {...register(`${input.key}`, input.validation)}
                    />
                    {errors[`${input.key}`]?.message && <p className="formInput--error">{errors[`${input.key}`]?.message}</p>}

                  </div>
                })
              }
              <button type="submit" className="btn-update">{action}</button>
              <button type="" className="btn--reset-from" onClick={resetFrom}>reset from</button>

            </form>
            <div className="bottom bottom--no-border">
              <div className='datatable datatable--with100'>
                <div className='datatableTitle'>
                  {`Lịch làm việc`}
                </div>
                <div style={{ height: 430, width: '100%' }}>
                  <DataGrid
                    className='dataGrid'
                    rows={dataSchedule}
                    columns={scheduleColumns.concat(actionColum)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    sx={{
                      boxShadow: 3,
                      border: 2,
                      borderColor: '#018080',
                      '& .MuiDataGrid-cell:hover': {
                        color: '#018080',
                      },
                    }}
                  />
                </div>
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
      </AppLayout>
    </div>
  )
}

export default NewShedule