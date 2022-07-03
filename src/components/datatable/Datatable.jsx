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
      } else {
        toast.success(response.data.errMessage)
      }
    } catch (error) {
      toast.error(error.data)
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
              <div className='viewButton' >View</div>
            </Link>
            <div className='deleteButton' onClick={() => { handleDele(params.id) }}>Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {`List ${props.title}`}
        <Link to={`/${props.title}/new`} style={{ textDecoration: "none" }} className="link">
          {`Add New ${props.titleApi}`}
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
  )
}

export default Datatable