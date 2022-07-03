export const userInputs = [
  {
    id: 1,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
    validation: { required: "This is required." }
  },
  {
    id: 2,
    label: "Ma User",
    key: "MaUser",
    type: "number",
    placeholder: "220001",
    validation: { required: true, pattern: /^[\+]?[(]?[0-9]{6}$/im, message: "vui long" }
  },
  {
    id: 3,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
    validation: { required: true, minLength: 9, maxLength: 12 }
  },
  {
    id: 4,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
    validation: { required: true, minLength: 6, maxLength: 20 }
  },
  {
    id: 5,
    label: "Chức vụ",
    key: "MaChucVu",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 6,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }],
    validation: { required: true }

  },
  {
    id: 7,
    label: "Email",
    key: "email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
    validation: {
      required: true,
      pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "number",
    placeholder: "(+84) 234 567 89",
    validation: { required: true, pattern: /^[\+]?[(]?[1-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im }
  },
  {
    id: 9,
    label: "Mật khẩu",
    key: "password",
    type: "password",
    validation: { required: true, minLength: 6 }
  },
  {
    id: 10,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
    validation: { required: true }
  },
  {
    id: 11,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    placeholder: "",
    validation: { required: true }
  },
  {
    id: 12,
    label: "HinhAnh",
    key: "HinhAnh",
    type: "text",
  },
];
export const doctorInputs = [
  {
    id: 1,
    label: "Ma BS",
    key: "MaBS",
    type: "number",
    placeholder: "1001",
    validation: { required: true, pattern: /^[\+]?[(]?[1-9]{4}$/im }
  },
  {
    id: 2,
    label: "Mã Khoa",
    key: "MaKhoa",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
    validation: { required: true, }
  },
  {
    id: 4,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
    validation: { required: true, pattern: /^[\+]?[(]?[1-9]{9}$/im }

  },
  {
    id: 5,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    validation: { required: true }
  },
  {
    id: 6,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
    validation: { required: true, minLength: 5 }
  },
  {
    id: 7,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }],
    validation: { required: true }
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "text",
    placeholder: "(+84) 234 567 789",
    validation: { required: true, pattern: /^[\+]?[(]?[1-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/im }
  },
  {
    id: 9,
    label: "Chuyên Ngành",
    key: "ChuyenNganh",
    type: "text",
    placeholder: "Tai mũi họng",
    validation: { required: true }
  },
  {
    id: 10,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
    validation: { required: true, minLength: 6 }
  },
  {
    id: 11,
    label: "Mật khẩu",
    key: "password",
    type: "password",
    validation: { required: true, minLength: 6 }
  },
  {
    id: 12,
    label: "Email",
    key: "email",
    type: "email",
    placeholder: "john_doe@gmail.com",
    validation: {
      required: true,
      pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },
];
export const departmentInputs = [
  {
    id: 1,
    label: "Ma Khoa",
    key: "MaKhoa",
    type: "number",
    placeholder: "101",
    validation: { required: true, maxLength: 6 }
  },
  {
    id: 2,
    label: "Tên Khoa",
    key: "TenKhoa",
    type: "text",
    placeholder: "Khoa ...",
    validation: { required: true }
  },
  {
    id: 3,
    label: "Mô tả",
    key: "MoTa",
    type: "text",
    placeholder: "...",
    validation: { required: true }
  },
];
export const scheduleInputs = [
  {
    id: 1,
    label: "Mã Bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 2,
    label: "Mã Phòng",
    key: "MaPhong",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    label: "Mã Ca Khám",
    key: "CaKham",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 4,
    label: "Ngày khám",
    key: "NgayKham",
    type: "date",
    validation: { required: true }
  },
];
export const roleInputs = [
  {
    id: 1,
    label: "Mã Chức Vụ",
    key: "MaChucVu",
    type: "number",
    placeholder: "1",
    validation: { required: true, minLength: 1 }
  },
  {
    id: 2,
    label: "Tên Chức Vụ",
    key: "TenChucVu",
    type: "text",
    placeholder: "Chức vụ ...",
    validation: { required: true, minLength: 5 }
  },
];
export const bookingInputs = [
  {
    id: 1,
    label: "Ma DL",
    key: "MaDL",
    type: "number",
    placeholder: "3001",
    validation: { required: true, minLength: 3 }
  },
  {
    id: 2,
    label: "Mã User",
    key: "MaUser",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Mã bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 4,
    label: "Thời gian",
    key: "ThoiGian",
    type: "time",
    validation: { required: true }
  },
  {
    id: 5,
    label: "NGày dặt lịch",
    key: "NgayDL",
    type: "date",
    validation: { required: true }
  },
  {
    id: 6,
    label: "Tình trạng bệnh nhân",
    key: "TinhTrangBN",
    type: "text",
    placeholder: "...",
    validation: { required: true }
  },
  {
    id: 7,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "failure" }],
    validation: { required: true }
  },
];
export const medicalExaminationInputs = [
  {
    id: 1,
    label: "Ma PK",
    key: "MaPK",
    type: "number",
    placeholder: "1",
    validation: { required: true, minLength: 1 }
  },
  {
    id: 2,
    label: "Mã DL",
    key: "MaDL",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Ca Khám",
    key: "CaKham",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 4,
    label: "Ngày khám",
    key: "NgayKham",
    type: "date",
    validation: { required: true }
  },
  {
    id: 5,
    label: "Kết quả khám",
    key: "KetQua",
    type: "text",
  },
];
export const medicalTestInputs = [
  {
    id: 1,
    label: "Mã phiếu khám",
    key: "MaPK",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 2,
    label: "Mã Bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Tên Phiếu Xét nghiệm",
    key: "TenPXN",
    type: "text",
    placeholder: "Phiếu xét nghiệm máu",
    validation: { required: true }
  },
  {
    id: 4,
    label: "Kết quả",
    key: "KetQua",
    placeholder: "Nhóm máu...",
    validation: { required: true }
  },
  {
    id: 5,
    label: "Ngày xét nghiệm",
    key: "NgayXN",
    type: "date",
    validation: { required: true }
  },
  {
    id: 6,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "failure" }],
    validation: { required: true }
  },
];
export const medicineInputs = [
  {
    id: 1,
    label: "Ma Thuoc",
    key: "MaThuoc",
    type: "number",
    placeholder: "1",
    validation: { required: true, maxLength: 6 }
  },
  {
    id: 2,
    label: "Ten Thuoc",
    key: "TenThuoc",
    type: "text",
    placeholder: "Thuốc abc",
    validation: { required: true, maxLength: 255 }
  },
  {
    id: 3,
    label: "Thành phần",
    key: "ThanhPhan",
    type: "text",
    placeholder: "Gồm ...",
    validation: { required: true, maxLength: 255 }
  },
  {
    id: 4,
    label: "Công dụng",
    key: "CongDung",
    type: "text",
    placeholder: "Dùng để chữa ...",
    validation: { required: true }
  },
  {
    id: 5,
    label: "Giá bán",
    key: "GiaBan",
    type: "number",
    placeholder: "100 000đ",
    validation: { required: true }
  },
  {
    id: 6,
    label: "NGày SX",
    key: "NgaySX",
    type: "date",
    validation: { required: true }
  },
  {
    id: 7,
    label: "Han Su Dung",
    key: "HanSuDung",
    type: "text",
    placeholder: "12 tháng",
    validation: { required: true }
  },
  {
    id: 8,
    label: "Don Vi",
    key: "DonVi",
    type: "select",
    data: [{ key: "Hộp", value: "Hộp" }, { key: "Lọ", value: "Lọ" }, { key: "Cái", value: "Cái" }, { key: "Bịch", value: "Bịch" }, { key: "Kg", value: "Kg" }, { key: "Cuộn", value: "Cuộn" }],
    validation: { required: true }
  },
];
export const clinicInputs = [
  {
    id: 1,
    label: "Mã phòng khám",
    key: "MaPhong",
    type: "number",
    placeholder: "101",
    validation: { required: true, minLength: 3, maxLength: 5 }
  },
  {
    id: 2,
    label: "Mã Khoa",
    key: "MaKhoa",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Tên Phòng Khám",
    key: "TenPhongKham",
    type: "text",
    placeholder: "Phòng khám 101",
    validation: { required: true, maxLength: 255 }
  },
  {
    id: 4,
    label: "Chức năng",
    key: "ChucNang",
    type: "text",
    placeholder: "Chức năng ",
    validation: { required: true, maxLength: 255 }
  },
];
export const prescriptionInputs = [
  {
    id: 1,
    label: "Mã Đơn thuốc",
    key: "MaDT",
    type: "number",
    placeholder: "1001",
    validation: { required: true, minLength: 4, maxLength: 5 }
  },
  {
    id: 2,
    label: "Mã bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Mã Bệnh nhân",
    key: "MaUser",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 4,
    label: "Tình trạng",
    key: "TinhTrang",
    type: "text",
    placeholder: "Tình trạng bệnh của bệnh nhân",
    validation: { required: true, maxLength: 255 }
  },
  {
    id: 5,
    label: "Lời dặng của bác sĩ",
    key: "LoiDanBS",
    type: "text",
    placeholder: "Dùng sau khi ăn....",
    validation: { required: true, maxLength: 255 }
  },
  {
    id: 6,
    label: "Ngày cấp đơn thuốc",
    key: "NgayCap",
    type: "date",
    validation: { required: true }
  },
  {
    id: 7,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "failure" }],
    validation: { required: true }
  },
  {
    id: 8,
    label: "Tổng tiền thuốc",
    key: "TongTienThuoc",
    type: "number",
    validation: { required: true }
  },
];
export const prescriptionDetailInputs = [
  {
    id: 1,
    label: "Mã Đơn thuốc",
    key: "MaDT",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 2,
    label: "Mã Thuốc",
    key: "MaThuoc",
    type: "select",
    data: [],
    validation: { required: true }
  },
  {
    id: 3,
    label: "Liều lượng trong ngày",
    key: "LieuLuong",
    type: "select",
    data: [{ key: 1, value: "1 Lần" }, { key: 2, value: "2 Lần" }, { key: 3, value: "3 Lần" }],
    validation: { required: true }
  },
  {
    id: 4,
    label: "Số lượng mỗi lần uống",
    key: "SoLuong",
    type: "number",
    validation: { required: true }
  },
  {
    id: 5,
    label: "Số ngày uống",
    key: "SoNgayUong",
    type: "number",
    placeholder: "15",
    validation: { required: true }
  },
  {
    id: 6,
    label: "Tổng tiền thuốc",
    key: "TongTienThuoc",
    type: "number",
  }
];