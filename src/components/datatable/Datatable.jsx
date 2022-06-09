import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

const Datatable = () => {

  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className='viewButton'>View</div>
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
        <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className='dataGrid'
        rows={userRows}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable