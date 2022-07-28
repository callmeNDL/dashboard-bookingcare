import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useEffect, useState } from 'react';
import moment from 'moment';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Datatable = (props) => {
  const [data, setData] = useState({});
  const [dateSelect, setDateSelect] = useState();
  const [caKham, setCaKham] = useState('');


  const handleDele = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/${props.titleApi}/delete-${props.titleApi}`, {
        data: {
          id: id
        }
      });
      if (response.data.errCode == '1') {
        toast.error(response.data.errMessage)
      } else if (response.data.errCode == '0') {
        toast.success(response.data.errMessage)
        props.rerenderParentCallback();
      } else {
        toast.error("Không thể xoá")
      }
    } catch (error) {
      toast.error("Không thể xoá")
    }
  }

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={`/${props.title}/${params.id}`} style={{ textDecoration: "none" }} >
              <div className='viewButton' >Xem</div>
            </Link>
            <div className='deleteButton' onClick={() => { handleDele(params.id) }}>Xoá</div>
          </div>
        )
      }
    }
  ]

  useEffect(() => {
    setData(props.data)
  }, [props])

  const onChangeDate = (date) => {
    setDateSelect(date)
    if (props.title === 'bookings') {
      if (caKham) {
        const resultCaKham = props.data.filter((item) => item.CaKham === caKham)
        const resultDate = resultCaKham.filter((item) => item.NgayDL === date)
        setData(resultDate);
      } else {
        const resultDate = props.data.filter((item) => item.NgayDL === date)
        setData(resultDate);
      }
    } else {
      const resultDate = props.data.filter((item) => item.NgayKham === date)
      setData(resultDate);
    }
  };

  const handleChange = (caKham) => {
    setCaKham(caKham);
    if (dateSelect) {
      const resultDate = props.data.filter((item) => item.NgayDL === dateSelect)
      const resultCaKham = resultDate.filter((item) => item.CaKham === caKham)
      setData(resultCaKham)
    } else {
      const resultCaKham = props.data.filter((item) => item.CaKham === caKham)
      setData(resultCaKham)
    }
  };

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {`Danh sách ${props.title}`}
        <Link to={`/${props.title}/new`} style={{ textDecoration: "none" }} className="link">
          {`Thêm mới ${props.titleApi}`}
        </Link>
      </div>

      {props.title === 'bookings'
        ?
        <div className='datatable__select'>
          <div className='datatable__select__date'>
            <label className='title'>Chọn ngày Đặt lịch</label>
            <input className='input' type="date" value={dateSelect} onChange={(e) => onChangeDate(e.target.value)} />
          </div>
          <div className='datatable__select__CaKham'>
            <label className='title'>Ca Khám</label>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              {/* <InputLabel id="demo-select-small" className='title-dropdown'>Ca Khám</InputLabel> */}
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={caKham}
                onChange={(e) => handleChange(e.target.value)}
              >
                <MenuItem value={"Ca1"}>Ca1</MenuItem>
                <MenuItem value={"Ca2"}>Ca2</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        : ""
      }
      {props.title === 'medicalExaminations'
        ?
        <div className='datatable__select'>
          <div className='datatable__select__date'>
            <label className='title'>Chọn ngày khám</label>
            <input className='input' type="date" value={dateSelect} onChange={(e) => onChangeDate(e.target.value)} />
          </div>

        </div>
        : ""
      }

      <DataGrid
        className='dataGrid'
        rows={data}
        columns={props.colum.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        initialState={{
          sorting: {
            sortModel: [{ field: 'NgayKham', sort: 'desc' }, { field: 'NgayDL', sort: 'desc' }],
          },
        }}
      // checkboxSelection
      />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}

export default Datatable