import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import { getMedicine } from '../../redux/medicineSlide';
import { getDTDetail, updatePrescriptionDetail } from "../../apiServices/presDetailServices";
import { DataGrid } from '@mui/x-data-grid';
import { prescriptionDetailColumns } from '../../datatablesource'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import AppLayout from "../../layout/Layout";



const NewPrescriptionDetail = ({ inputs }) => {
  const dispatch = useDispatch()
  const { prescriptionID } = useParams();

  //state
  const [listPreDetails, setListPreDetails] = useState({});
  const [inputData, setInputData] = useState();
  const [action, setAction] = useState("CREATE");


  //usehookform

  //useSelector
  const data = useSelector((state) => state.prescriptionDetail.prescriptionDetail)

  const onSubmit = async (data) => {
    if (action === "CREATE") {
      try {
        const response = await axios.post(`http://localhost:8001/api/prescriptionDetail/create-prescriptionDetail`, data);
        if (response.data.errCode === 1) {
          toast.error(response.data.message)
        }
        fetchPresciptDetail();
        toast.success(response.data.message)
      } catch (error) {
        toast.error(error.data)
      }
    } else {
      const response = await updatePrescriptionDetail(data);
      console.log(response);
      if (response.errCode === 0) {
        fetchPresciptDetail();
        resetFrom();
        toast.success(response.errMessage)
        reset()
      } else {
        toast.error(response.data.message)
      }
    }
  }

  const assignDepartment = async () => {
    const medicineResult = await dispatch(getMedicine());
    const dataMedicine = unwrapResult(medicineResult);

    inputs.forEach(input => {
      if (input.key === "MaThuoc" && Object.keys(dataMedicine).length !== 0) {
        input.data = dataMedicine;
      };
      setInputData(inputs)
    })
  };

  const fetchPresciptDetail = async () => {
    await getDTDetail(prescriptionID, dispatch);
    setListPreDetails(data)
  };

  const resetFrom = () => {
    reset({
      MaDT: prescriptionID,
      MaThuoc: inputs[1].data[0].MaThuoc,
      LieuLuong: "",
      SoLuong: "",
      SoNgayUong: "",
      TongTienThuoc: null,
    });
    setAction("CREATE")
  }

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/prescriptionDetail/delete-prescriptionDetail`, {
        data: {
          id: id
        }
      });
      if (response.data.errCode === 1) {
        toast.error(response.data.errMessage)
      } else if (response.data.errCode === 0) {
        fetchPresciptDetail()
        toast.success(response.data.errMessage)
      } else {
        toast.error("Không thể xoá")
      }
    } catch (error) {
      toast.error("Không thể xoá")
    }
  };

  const handleUpdate = async (data) => {
    reset(data.row);
    setAction("UPDATE");
    console.log(data.row);
  };

  useEffect(() => {
    assignDepartment();
    fetchPresciptDetail();
  }, [])

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      MaDT: prescriptionID
    }
  });

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <div className='viewButton' onClick={() => { handleUpdate(params) }}>Xem</div>
            <div className='deleteButton' onClick={() => { handleDelete(params.id) }}>Xoá</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className="single">
      <AppLayout>
        <div className="top">
          <h1>Thêm mới chit tiết dơn thuốc</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit(onSubmit)}>
              {
                inputs.map((input) => {
                  if (input.type === "select") {
                    if (input.key === "MaDT") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <input
                          type={input.type}
                          placeholder={input.placeholder}
                          value={prescriptionID}
                          disabled
                          {...register(`${input.key}`)}
                        />
                      </div>
                    }
                    if (input.key === "MaThuoc") {
                      return <div className="formInput" key={input.id}>
                        <label>{input.label}</label>
                        <select name={input.label} {...register(`${input.key}`, input.validation)}>
                          {input.data.map((option) => {
                            return <option value={option.MaThuoc} key={option.MaThuoc}>{`${option.MaThuoc} - ${option.TenThuoc}`}</option>
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

              <button type="submit">{action}</button>
              <div type="" className="btn--reset-from" onClick={resetFrom}>reset from</div>
            </form>
          </div>

        </div>
        <div className="bottom">
          <div className='datatable datatable--with100'>
            <div className='datatableTitle'>
              {`Danh sách thuốc đơn ${prescriptionID}`}
            </div>
            <div style={{ height: 430, width: '100%' }}>
              <DataGrid
                className='dataGrid'
                rows={data}
                columns={prescriptionDetailColumns.concat(actionColum)}
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
      </AppLayout>
    </div>
  )
}

export default NewPrescriptionDetail