export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.HinhAnh} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "HoTen",
    headerName: "HoTen",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "CMND",
    headerName: "CMND",
    width: 100,
  },
  {
    field: "status",
    headerName: "MaChucVu",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MaChucVu}`}>
          {params.row.MaChucVu}
        </div>
      );
    },
  },
  {
    field: "NgaySinh",
    headerName: "NgaySinh",
    width: 150,
  },
];


export const departmentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "maKhoa",
    headerName: "MaKhoa",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MaKhoa}`}>
          {params.row.MaKhoa}
        </div>
      );
    },
  },
  {
    field: "TenKhoa",
    headerName: "TenKhoa",
    width: 200,
  },
  {
    field: "MoTa",
    headerName: "MoTa",
    width: 400,
  },
];

export const bookingColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "MaDL",
    headerName: "MaDL",
    width: 100,
  },
  {
    field: "MaUser",
    headerName: "MaUser",
    width: 100,
  },
  {
    field: "MaBS",
    headerName: "MaBS",
    width: 100,
  },
  {
    field: "ThoiGian",
    headerName: "ThoiGian",
    width: 150,
  },
  {
    field: "NgayDL",
    headerName: "NgayDL",
    width: 150,
  },
  {
    field: "TinhTrangBN",
    headerName: "TinhTrangBN",
    width: 300,
  },
  {
    field: "trangThai",
    headerName: "TrangThai",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus--${params.row.TrangThai}`}>
          {params.row.TrangThai}
        </div>
      );
    },
  },
];
