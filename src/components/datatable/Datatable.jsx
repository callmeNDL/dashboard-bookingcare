import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

const Datatable = (props) => {

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
      width: 200,
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

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {`Danh sách ${props.title}`}
        <Link to={`/${props.title}/new`} style={{ textDecoration: "none" }} className="link">
          {`Thêm mới ${props.titleApi}`}
        </Link>
      </div>
      <DataGrid
        className='dataGrid'
        rows={props.data}
        columns={props.colum.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
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