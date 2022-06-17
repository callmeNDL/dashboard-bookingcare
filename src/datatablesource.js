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

//temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "LONG",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
//   },
// ];

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