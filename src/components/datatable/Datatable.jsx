import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const Datatable = (props) => {

  const handleGetData = () => {
    console.log("123");
  }


  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {

        return (
          <div className='cellAction'>
            <Link to={`/users/${params.id}`} style={{ textDecoration: "none" }} >
              <button className='viewButton' >View</button>
            </Link>
            <div className='deleteButton'>Delete</div>
          </div>
        )
      }
    }
  ]

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add new User
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
        checkboxSelection
      />
    </div>
  )
}

export default Datatable