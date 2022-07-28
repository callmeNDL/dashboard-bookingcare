export const userInputs = [
  {
    id: 1,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 30,
        message: "Tối đa 30 ký tự"
      },
    }
  },
  {
    id: 2,
    label: "Ma User",
    key: "MaUser",
    type: "number",
    placeholder: "220001",
  },
  {
    id: 3,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 9,
        message: "CMND có tối thiểu 9 ký tự"
      },
      maxLength: {
        value: 12,
        message: "CCCD có tối đa 12 ký tự"
      },
      pattern: {
        value: /^[0-9]{9}/,
        message: "CMND chỉ chứa số (chỉ chứa số)"
      }
    }
  },
  {
    id: 4,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 6,
        message: "Tối thiểu 6 ký tự"
      },
      maxLength: {
        value: 30,
        message: "Tối đa 30 ký tự"
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: "Không chứa ký tự đặt biệt"
      }
    }
  },
  {
    id: 5,
    label: "Chức vụ",
    key: "MaChucVu",
    type: "select",
    data: [],
    validation: {
      required: "Không để trống.",
    }
  },
  {
    id: 6,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }],
    validation: {
      required: "Không để trống.",
    }
  },
  {
    id: 7,
    label: "Email",
    key: "email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
    validation: {
      required: "Không để trống.",
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Nhập đúng định dạng long0432@gmail.com"
      }
    }
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "text",
    placeholder: "0123 456 789",
    validation: {
      required: "Không để trống.",
      pattern: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im,
        message: "Số điện thoại gồm 10 số"
      }
    }
  },
  {
    id: 9,
    label: "Mật khẩu",
    key: "password",
    type: "password",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 8,
        message: "Tối thiểu 8 ký tự"
      },
      maxLength: {
        value: 8,
        message: "Tối đa 8 ký tự"
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "Mật khẩu phải gồm chữ thường, in hoa, sô"
      }
    }
  },
  {
    id: 10,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
    validation: {
      required: "Không để trống.",
    }
  },
  {
    id: 11,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    placeholder: "",
    validation: {
      required: "Không được để trống",
    }
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
    validation: { required: "Không được để trống" }
  },
  {
    id: 2,
    label: "Mã Khoa",
    key: "MaKhoa",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 3,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 30,
        message: "Tối đa 30 ký tự"
      },
    }
  },
  {
    id: 4,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 9,
        message: "CMND có tối thiểu 9 ký tự"
      },
      maxLength: {
        value: 12,
        message: "CCCD có tối đa 12 ký tự"
      },
      pattern: {
        value: /^[0-9]{9}/,
        message: "CMND chỉ chứa số (chỉ chứa số)"
      }
    }
  },
  {
    id: 5,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    validation: { required: "Không được để trống" }
  },
  {
    id: 6,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 6,
        message: "Tối thiểu 6 ký tự"
      },
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 7,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "text",
    placeholder: "(+84) 234 567 789",
    validation: {
      required: "Không để trống.",
      pattern: {
        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im,
        message: "Số điện thoại gồm 10 số"
      }
    }
  },
  {
    id: 9,
    label: "Chuyên Ngành",
    key: "ChuyenNganh",
    type: "text",
    placeholder: "Tai mũi họng",
    validation: {
      required: "Không để trống.",
    },
    maxLength: {
      value: 50,
      message: "Tối đa 50 ký tự"
    },
  },
  {
    id: 10,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 6,
        message: "Tối thiểu 6 ký tự"
      },
      maxLength: {
        value: 30,
        message: "Tối đa 30 ký tự"
      },
    }
  },
  {
    id: 11,
    label: "Mật khẩu",
    key: "password",
    type: "password",
    validation: {
      required: "Không để trống.",
      minLength: {
        value: 8,
        message: "Tối thiểu 8 ký tự"
      },
      maxLength: {
        value: 8,
        message: "Tối đa 8 ký tự"
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message: "Mật khẩu phải gồm chữ thường, in hoa, sô"
      }
    }
  },
  {
    id: 12,
    label: "Email",
    key: "email",
    type: "email",
    placeholder: "john_doe@gmail.com",
    validation: {
      required: "Không để trống.",
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Nhập đúng định dạng long0432@gmail.com"
      }
    }
  },
];
export const departmentInputs = [
  {
    id: 1,
    label: "Ma Khoa",
    key: "MaKhoa",
    type: "text",
    placeholder: "101",
    validation: { required: "Không được để trống", maxLength: 6 }
  },
  {
    id: 2,
    label: "Tên Khoa",
    key: "TenKhoa",
    type: "text",
    placeholder: "Khoa ...",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 30,
        message: "Tối đa 30 ký tự"
      },
    }
  },
  {
    id: 3,
    label: "Mô tả",
    key: "MoTa",
    type: "text",
    placeholder: "...",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      },
    }
  },
];
export const scheduleInputs = [
  {
    id: 1,
    label: "Mã Bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 2,
    label: "Mã Phòng",
    key: "MaPhong",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 3,
    label: "Mã Ca Khám",
    key: "CaKham",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 4,
    label: "Ngày khám",
    key: "NgayKham",
    type: "date",
    validation: {
      required: "Không được để trống",
    }
  },
];
export const roleInputs = [
  {
    id: 1,
    label: "Mã Chức Vụ",
    key: "MaChucVu",
    type: "number",
    placeholder: "1",
    validation: { required: "Không được để trống" }
  },
  {
    id: 2,
    label: "Tên Chức Vụ",
    key: "TenChucVu",
    type: "text",
    placeholder: "Chức vụ ...",
    validation: { required: "Không được để trống" }
  },
];
export const bookingInputs = [
  {
    id: 1,
    label: "Ma DL",
    key: "MaDL",
    type: "number",
    placeholder: "3001"
  },
  {
    id: 2,
    label: "Mã User",
    key: "MaUser",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 3,
    label: "Mã bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 4,
    label: "Thời gian yêu cầu",
    key: "ThoiGian",
    type: "time",
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 5,
    label: "Ca Khám",
    key: "CaKham",
    type: "select",
    data: [{ key: 'Ca1', value: "Ca1" }, { key: 'Ca2', value: "Ca2" }],
    validation: {
      required: "Không được để trống"
    }
  },
  {
    id: 6,
    label: "NGày dặt lịch",
    key: "NgayDL",
    type: "date",
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 7,
    label: "Tình trạng bệnh nhân",
    key: "TinhTrangBN",
    type: "text",
    placeholder: "...",
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 8,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "waiting" }, { key: 3, value: "finish" }, { key: 4, value: "cancel" }, { key: 4, value: "failure" }],
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
];
export const medicalExaminationInputs = [
  {
    id: 1,
    label: "Ma PK",
    key: "MaPK",
    type: "number",
    placeholder: "1"
  },
  {
    id: 2,
    label: "Phòng khám",
    key: "MaPhong",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 3,
    label: "Mã DL",
    key: "MaDL",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      },
    }
  },
  {
    id: 4,
    label: "Ca Khám",
    key: "CaKham",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      },
    }
  },
  {
    id: 5,
    label: "Ngày khám",
    key: "NgayKham",
    type: "date",
    validation: {
      required: "Không được để trống", maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 6,
    label: "Thời gian",
    key: "ThoiGianKham",
    type: "time",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 7,
    label: "TenPK",
    key: "TenPK",
    type: "text",
    placeholder: "Tên Phiếu khám",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 8,
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
    validation: { required: "Không được để trống" }
  },
  {
    id: 2,
    label: "Mã Bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: { required: "Không được để trống" }
  },
  {
    id: 3,
    label: "Tên Phiếu Xét nghiệm",
    key: "TenPXN",
    type: "text",
    placeholder: "Phiếu xét nghiệm máu",
    validation: { required: "Không được để trống" }
  },
  {
    id: 4,
    label: "Kết quả",
    key: "KetQua",
    placeholder: "Nhóm máu...",
    validation: { required: "Không được để trống" }
  },
  {
    id: 5,
    label: "Ngày xét nghiệm",
    key: "NgayXN",
    type: "date",
    validation: { required: "Không được để trống" }
  },
  {
    id: 6,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "failure" }],
    validation: { required: "Không được để trống" }
  },
];
export const medicineInputs = [
  {
    id: 1,
    label: "Ma Thuoc",
    key: "MaThuoc",
    type: "number",
    placeholder: "1",
    validation: { required: "Không được để trống" }
  },
  {
    id: 2,
    label: "Ten Thuoc",
    key: "TenThuoc",
    type: "text",
    placeholder: "Thuốc abc",
    validation: { required: "Không được để trống" }
  },
  {
    id: 3,
    label: "Thành phần",
    key: "ThanhPhan",
    type: "text",
    placeholder: "Gồm ...",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 4,
    label: "Công dụng",
    key: "CongDung",
    type: "text",
    placeholder: "Dùng để chữa ...",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 5,
    label: "Giá bán",
    key: "GiaBan",
    type: "number",
    placeholder: "100 000đ",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 6,
    label: "NGày SX",
    key: "NgaySX",
    type: "date",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 7,
    label: "Hạn sử dụng",
    key: "HanSuDung",
    type: "text",
    placeholder: "12 tháng",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 8,
    label: "Đơn vị",
    key: "DonVi",
    type: "select",
    data: [{ key: "Hộp", value: "Hộp" }, { key: "Lọ", value: "Lọ" }, { key: "Cái", value: "Cái" }, { key: "Bịch", value: "Bịch" }, { key: "Kg", value: "Kg" }, { key: "Cuộn", value: "Cuộn" }, { key: "Chai", value: "Chai" }],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 9,
    label: "Số lượng trong mỗi đơn vị",
    key: "SoLuong",
    type: "number",
    placeholder: "24 (viên)",
    validation: {
      required: "Không được để trống",
    }
  },
];
export const clinicInputs = [
  {
    id: 1,
    label: "Mã phòng khám",
    key: "MaPhong",
    type: "text",
    placeholder: "101",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 4,
        message: "Tối đa 4 ký tự"
      },
    }
  },
  {
    id: 2,
    label: "Mã Khoa",
    key: "MaKhoa",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 3,
    label: "Tên Phòng Khám",
    key: "TenPhongKham",
    type: "text",
    placeholder: "Phòng khám 101",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 50,
        message: "Tối đa 50 ký tự"
      }
    }
  },
  {
    id: 4,
    label: "Chức năng",
    key: "ChucNang",
    type: "text",
    placeholder: "Chức năng ",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
];
export const prescriptionInputs = [
  {
    id: 1,
    label: "Mã Đơn thuốc",
    key: "MaDT",
    type: "number",
    placeholder: "1001",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 2,
    label: "Thuộc phiếu khám",
    key: "MaPK",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 3,
    label: "Mã bác sĩ",
    key: "MaBS",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 4,
    label: "Mã Bệnh nhân",
    key: "MaUser",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 5,
    label: "Tình trạng",
    key: "TinhTrang",
    type: "text",
    placeholder: "Tình trạng bệnh của bệnh nhân",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 6,
    label: "Lời dặng của bác sĩ",
    key: "LoiDanBS",
    type: "text",
    placeholder: "Dùng sau khi ăn....",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 7,
    label: "Ngày cấp đơn thuốc",
    key: "NgayCap",
    type: "date",
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 8,
    label: "Trạng thái",
    key: "TrangThai",
    type: "select",
    data: [{ key: 0, value: "new" }, { key: 1, value: "confirmed" }, { key: 2, value: "failure" }],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 9,
    label: "Tổng tiền thuốc",
    key: "TongTienThuoc",
    type: "number",
    validation: {
      required: "Không được để trống",
    }
  },
];
export const prescriptionDetailInputs = [
  {
    id: 1,
    label: "Mã Đơn thuốc",
    key: "MaDT",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 2,
    label: "Mã Thuốc",
    key: "MaThuoc",
    type: "select",
    data: [],
    validation: {
      required: "Không được để trống",
    }
  },
  {
    id: 3,
    label: "Liều lượng trong ngày",
    key: "LieuLuong",
    type: "text",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 4,
    label: "Số lượng thuốc",
    key: "SoLuong",
    type: "number",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 5,
    label: "Số ngày sủ dụng thuốc",
    key: "SoNgayUong",
    type: "number",
    placeholder: "15",
    validation: {
      required: "Không được để trống",
      maxLength: {
        value: 255,
        message: "Tối đa 255 ký tự"
      }
    }
  },
  {
    id: 6,
    label: "Tổng tiền thuốc",
    key: "TongTienThuoc",
    type: "number",
  }
];