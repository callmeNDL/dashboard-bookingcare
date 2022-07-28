import './printMedicalEx.scss'
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import HeaderPrint from './HeaderPrint';
import { Navigate, useNavigate } from 'react-router-dom';
function PrintInvoice() {
  const date = new Date();
  const componentRef = useRef();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const booking = useSelector((state) => state.print.invoice.current)
  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();

    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  useEffect(() => {
    if (!booking) {
      navigate('/home')
    }
  }, [])

  console.log(booking);

  return (
    <>
      <button className="btn btn--green" onClick={handlePrint}><LocalPrintshopIcon />In Hoá đơn</button>
      <div className='print-medicalExamination' ref={componentRef}>
        <HeaderPrint />
        <div className="page-content container">
          <div className="page-header">
            <p className="page-title">Hoá đơn ID: 91203918</p>
            <p className="page-title"> Mã bệnh nhân:{booking?.MaUser} </p>
          </div>
          <div className="content">
            <div className="title-center">
              <h1>HOÁ ĐƠN KHÁM BỆNH</h1>
              <div className="datetime">
                Ngày {date.getDate()} tháng {date.getMonth() + 1} năm {date.getFullYear()}
              </div>
            </div>
            <div className="user-info">
              <div className="col-left">
                <div className="user-info__item">
                  <span className="title">Họ tên bệnh nhân:</span>
                  {booking.User?.HoTen}
                </div>
                <div className="user-info__item">
                  <span className="title">Địa chỉ:</span>
                  {booking.User?.DiaChi}
                </div>
                <div className="user-info__item">
                  <span className="title">SĐT:</span>
                  0{booking.User?.SDT}
                </div>
                <div className="user-info__item">
                  <span className="title">Thời gian:</span>
                  {date.toLocaleTimeString()}
                </div>
              </div>
              <div className="col-right">
                <div className="user-info__item">
                  <span className="title">Tuổi:</span>
                  {getAge(booking.User?.NgaySinh)}
                </div>
                <div className="user-info__item">
                  <span className="title">Giới tính:</span>
                  {booking.User.GioiTinh ? "Nam" : "Nữ"}
                </div>
              </div>
            </div>
            <div className="list-item">
              <table className="table">
                <thead className="table__header">
                  <tr>
                    <th className='stt'>STT</th>
                    <th>Mã ĐK</th>
                    <th>Tên dịch vụ</th>
                    <th>Số lượng</th>
                    <th width="200">Đơn giá</th>
                  </tr>
                </thead>

                <tbody className="table__body">
                  <tr>
                    <td className="center">1</td>
                    <td className="center">{booking?.MaDL}</td>
                    <td className="center">Khám với bác sĩ {booking.Doctor?.HoTen}</td>
                    <td className="center">1</td>
                    <td className="center">500.000 vnđ</td>
                  </tr>
                  <tr>
                    <td colspan="5">
                      <div className="total right">
                        <div className="item">
                          <span>Tổng hoá đơn: </span>
                          500.000 vnđ
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='auth'>
              <div class="auth__user">
                <span>Người khám</span>
              </div>
              <div class="auth__admin">
                <span>Nhân viên</span>
                <span>(Ký, đóng dấu)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default PrintInvoice