export const userColumns = [
  { field: "MaUser", headerName: "MaUser", width: 80 },
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
    field: "SDT",
    headerName: "SDT",
    width: 100,
  },
  {
    field: "MaChucVu",
    headerName: "MaChucVu",
    width: 100,

  },
  {
    field: "NgaySinh",
    headerName: "NgaySinh",
    width: 150,
  },
];

export const doctorColumns = [
  {
    field: "MaBS",
    headerName: "MaBS",
    width: 70,
  },
  {
    field: "doctor",
    headerName: "Doctor",
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
    field: "MaKhoa",
    headerName: "MaKhoa",
    width: 100,
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
    field: "ChuyenNganh",
    headerName: "ChuyenNganh",
    width: 200,
  },
  {
    field: "CMND",
    headerName: "CMND",
    width: 100,
  },

  {
    field: "NgaySinh",
    headerName: "NgaySinh",
    width: 150,
  },

];
export const scheduleColumns = [
  {
    field: "MaBS",
    headerName: "MaBS",
    width: 150,
  },
  {
    field: "MaPhong",
    headerName: "MaPhong",
    width: 100,

  },
  {
    field: "CaKham",
    headerName: "CaKham",
    width: 200,
  },
  {
    field: "NgayKham",
    headerName: "NgayKham",
    width: 230,
  },

];
export const departmentColumns = [
  {
    field: "MaKhoa",
    headerName: "MaKhoa",
    width: 100,

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
        <div className={`cellWithStatus cellWithStatus--${params.row.TrangThai}`}>
          {params.row.TrangThai}
        </div>
      );
    },
  },
];
export const medicalExaminationColumns = [
  {
    field: "MaPK",
    headerName: "MaPK",
    width: 100,
  },
  {
    field: "MaDL",
    headerName: "MaDL",
    width: 100,
  },
  {
    field: "TenPK",
    headerName: "TenPK",
    width: 200,
  },
  {
    field: "CaKham",
    headerName: "CaKham",
    width: 100,
  },
  {
    field: "NgayKham",
    headerName: "NgayKham",
    width: 150,
  },
  {
    field: "KetQua",
    headerName: "KetQua",
    width: 250,
  },
];
export const medicalTestColumns = [
  {
    field: "id",
    headerName: "MaPXN",
    width: 100,
  },
  {
    field: "MaBS",
    headerName: "MaBS",
    width: 100,
  },
  {
    field: "MaPK",
    headerName: "MaPK",
    width: 100,
  },
  {
    field: "TenPXN",
    headerName: "TenPXN",
    width: 100,
  },
  {
    field: "KetQua",
    headerName: "KetQua",
    width: 250,
  },
  {
    field: "NgayXN",
    headerName: "NgayXN",
    width: 150,
  },
  {
    field: "TrangThai",
    headerName: "TrangThai",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus cellWithStatus--${params.row.TrangThai}`}>
          {params.row.TrangThai}
        </div>
      );
    },
  },
];
export const roleColumns = [
  {
    field: "MaChucVu",
    headerName: "MaChucVu",
    width: 200,

  },
  {
    field: "TenChucVu",
    headerName: "TenChucVu",
    width: 500,
  },
];

export const medicineColumns = [
  { field: "MaThuoc", headerName: "MaThuoc", width: 80 },
  {
    field: "TenThuoc",
    headerName: "TenThuoc",
    width: 200,
  },
  {
    field: "ThanhPhan",
    headerName: "ThanhPhan",
    width: 230,
  },
  {
    field: "CongDung",
    headerName: "CongDung",
    width: 100,
  },
  {
    field: "GiaBan",
    headerName: "GiaBan",
    width: 100,
  },
  {
    field: "DonVi",
    headerName: "DonVi",
    width: 70,
  },
  {
    field: "NgaySX",
    headerName: "NgaySX",
    width: 150,
  },
];
export const clinicColumns = [
  { field: "MaPhong", headerName: "MaPhong", width: 100 },
  {
    field: "MaKhoa",
    headerName: "MaKhoa",
    width: 100,
  },
  {
    field: "TenPhongKham",
    headerName: "TenPhongKham",
    width: 300,
  },
  {
    field: "ChucNang",
    headerName: "ChucNang",
    width: 400,
  },
];
export const prescriptionColumns = [
  { field: "MaDT", headerName: "MaDT", width: 70 },
  {
    field: "MaPK",
    headerName: "MaPK",
    width: 100,
  },
  {
    field: "MaBS",
    headerName: "MaBS",
    width: 100,
  },
  {
    field: "MaUser",
    headerName: "MaUser",
    width: 100,
  },
  {
    field: "TinhTrang",
    headerName: "TinhTrang",
    width: 250,
  },
  {
    field: "NgayCap",
    headerName: "NgayCap",
    width: 150,
  },
  {
    field: "LoiDanBS",
    headerName: "LoiDanBS",
    width: 250,
  },
  {
    field: "TrangThai",
    headerName: "TrangThai",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus cellWithStatus--${params.row.TrangThai}`}>
          {params.row.TrangThai}
        </div>
      );
    },
  },
  {
    field: "TongTienThuoc",
    headerName: "TongTienThuoc",
    width: 150,
  },
];
export const prescriptionDetailColumns = [
  { field: "MaDT", headerName: "MaDT", width: 70 },
  {
    field: "MaThuoc",
    headerName: "MaThuoc",
    width: 100,
  },
  {
    field: "LieuLuong",
    headerName: "LieuLuong",
    width: 300,
  },
  {
    field: "SoLuong",
    headerName: "SoLuong",
    width: 100,
  },
  {
    field: "SoNgayUong",
    headerName: "SoNgaySuDung",
    width: 150,
  },
  {
    field: "TongTienThuoc",
    headerName: "TongTienThuoc",
    width: 150,
  },
];