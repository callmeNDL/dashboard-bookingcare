import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const Datatable = (props) => {

  console.log('check props', props);

  const handleDele = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/${props.data.titleApi}/delete-${props.data.titleApi}`, {
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
            <Link to={`/${props.data.title}/${params.id}`} style={{ textDecoration: "none" }} >
              <button className='viewButton' >View</button>
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
        Add new {props.data.titleApi}
        <Link to={`/${props.data.title}/new`} style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className='dataGrid'
        rows={props.data.data}
        columns={props.data.colum.concat(actionColum)}
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