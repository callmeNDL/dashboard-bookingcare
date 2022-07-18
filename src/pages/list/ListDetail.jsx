import './list.scss'
import { DataGrid } from '@mui/x-data-grid';

function ListDetail(props) {
  return (
    <div className='datatable'>
      <div className='datatableTitle'>

      </div>
      <DataGrid
        className='dataGrid'
        rows={props.data}
        columns={props.colum}
        pageSize={9}
        rowsPerPageOptions={[9]}
      // checkboxSelection
      />
    </div>
  )
}

export default ListDetail