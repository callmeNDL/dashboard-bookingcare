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
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "CMND",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.CMND}`}>
          {params.row.CMND}
        </div>
      );
    },
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
    field: "ngaysinh",
    headerName: "NgaySinh",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.NgaySinh}`}>
          {params.row.NgaySinh}
        </div>
      );
    },
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
    field: "tenKhoa",
    headerName: "TenKhoa",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.TenKhoa}`}>
          {params.row.TenKhoa}
        </div>
      );
    },
  },
  {
    field: "moTa",
    headerName: "MoTa",
    width: 400,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MoTa}`}>
          {params.row.MoTa}
        </div>
      );
    },
  },
];

export const bookingColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "maDL",
    headerName: "MaDL",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MaDL}`}>
          {params.row.MaDL}
        </div>
      );
    },
  },
  {
    field: "maUser",
    headerName: "MaUser",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MaUser}`}>
          {params.row.MaUser}
        </div>
      );
    },
  },
  {
    field: "maBS",
    headerName: "MaBS",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.MaBS}`}>
          {params.row.MaBS}
        </div>
      );
    },
  },
  {
    field: "thoiGian",
    headerName: "ThoiGian",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.ThoiGian}`}>
          {params.row.ThoiGian}
        </div>
      );
    },
  },
  {
    field: "ngayDL",
    headerName: "NgayDL",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.NgayDL}`}>
          {params.row.NgayDL}
        </div>
      );
    },
  },
  {
    field: "tinhTrangBN",
    headerName: "TinhTrangBN",
    width: 300,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.TinhTrangBN}`}>
          {params.row.TinhTrangBN}
        </div>
      );
    },
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
