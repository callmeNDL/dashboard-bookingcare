import { useSelector } from 'react-redux';
export default function GetDataDepartment() {
  let departmentData = useSelector((state) => state.department.data);
  console.log("check", departmentData);
  return departmentData;
}



export const userInputs = [
  {
    id: 1,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Ma User",
    key: "MaUser",
    type: "number",
    placeholder: "US001",
  },
  {
    id: 3,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
  },
  {
    id: 4,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
  },
  {
    id: 5,
    label: "Chức vụ",
    key: "MaChucVu",
    type: "select",
    data: [{ key: 1, value: "Bệnh nhân" }, { key: 2, value: "Admin" }]
  },
  {
    id: 6,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }]
  },
  {
    id: 7,
    label: "Email",
    key: "email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "number",
    placeholder: "+1 234 567 89",
  },
  {
    id: 9,
    label: "Mật khẩu",
    key: "password",
    type: "password",
  },
  {
    id: 10,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 11,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    placeholder: "",
  },
];

export const doctorInputs = [
  {
    id: 1,
    label: "Họ Tên",
    key: "HoTen",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: 2,
    label: "Ma BS",
    key: "MaBS",
    type: "number",
    placeholder: "222001",
  },
  {
    id: 3,
    label: "Số CMND",
    key: "CMND",
    type: "number",
    placeholder: "123456789",
  },
  {
    id: 4,
    label: "Tên đăng nhập",
    key: "username",
    type: "text",
    placeholder: "johndone001",
  },
  {
    id: 5,
    label: "Chức vụ",
    key: "MaChucVu",
    type: "select",
    data: [{ key: 1, value: "Bệnh nhân" }, { key: 2, value: "Admin" }]
  },
  {
    id: 6,
    label: "Giới tính",
    key: "GioiTinh",
    type: "radio",
    data: [{ key: 1, value: "Male" }, { key: 0, value: "Female" }]
  },
  {
    id: 7,
    label: "Email",
    key: "email",
    type: "mail",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: 8,
    label: "Số điện thoại",
    key: "SDT",
    type: "number",
    placeholder: "+1 234 567 89",
  },
  {
    id: 9,
    label: "Mật khẩu",
    key: "password",
    type: "password",
  },
  {
    id: 10,
    label: "Địa chỉ",
    key: "DiaChi",
    type: "text",
    placeholder: "Elton St. 216 NewYork",
  },
  {
    id: 11,
    label: "Ngày sinh",
    key: "NgaySinh",
    type: "date",
    placeholder: "",
  },
];
export const departmentInputs = [
  {
    id: 1,
    label: "Ma Khoa",
    key: "MaKhoa",
    type: "number",

    placeholder: "101",
  },
  {
    id: 2,
    label: "Tên Khoa",
    key: "TenKhoa",
    type: "text",
    placeholder: "Khoa ...",
  },
  {
    id: 3,
    label: "Mô tả",
    key: "MoTa",
    type: "text",
    placeholder: "...",
  },
];