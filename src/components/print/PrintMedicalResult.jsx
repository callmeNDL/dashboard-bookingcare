
import './printMedicalEx.scss'
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef, useState } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import HeaderPrint from './HeaderPrint';
import { getBookingWithMaDL } from '../../apiServices/bookingServices';

function PrintMedicalResult() {
  const componentRef = useRef();
  const [booking, setBooking] = useState({});

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const date = new Date();

  const dataPrint = useSelector((state) => state.print.medicalResult.current)

  const getDataBooking = async () => {
    const res = await getBookingWithMaDL(dataPrint.Booking.MaDL)
    setBooking(res)
  }
  function getFormattedDate(a) {
    var arr = a.split("-");
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];
    return month + '/' + day + '/' + year;
  }

  useEffect(() => {
    getDataBooking()
  }, [])

  return (
    <>
      <button className="btn btn--green" onClick={handlePrint}><LocalPrintshopIcon />In kết quả khám bệnh</button>
      <div className='print-medicalExamination' ref={componentRef}>
        <HeaderPrint />
        <div className='info-medical'>
          <p>Mã phiếu khám: {dataPrint?.MaPK}</p>
          <p>Mã bệnh nhân:  {dataPrint.Booking?.MaUser}</p>
        </div>
        <h1 className='title'>KẾT QUẢ KHÁM BỆNH</h1>

        <div className='user'>
          <div className='info'>
            <div className='info__title'>Tên phiếu khám :</div>
            <div className='info__content'>{dataPrint?.TenPK}</div>
          </div>
          <div className='info  '>
            <div className='info__title'>Bác sĩ khám bệnh :</div>
            <div className='info__content'>{booking.Doctor?.HoTen}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Họ tên bệnh nhân:</div>
            <div className='info__content'>{booking.User?.HoTen}</div>
          </div>
          <br />
          <div className='info info--with25'>
            <div className='info__title'>Ngày sinh :</div>
            <div className='info__content'>{getFormattedDate(booking.User?.NgaySinh)}</div>
          </div>
          <div className='info info--with25'>
            <div className='info__title'>Giới tính :</div>
            <div className='info__content'>{booking.User?.GioiTinh === true ? "Nam" : "Nữ"}</div>
          </div>
          <div className='info '>
            <div className='info__title'>Địa chỉ :</div>
            <div className='info__content'>{booking.User?.DiaChi}</div>
          </div>

          <div className='info '>
            <div className='info__title'>Kết quả :</div>
            <div className='info__content'>{dataPrint?.KetQua}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Ngày khám :</div>
            <div className='info__content'>{getFormattedDate(dataPrint?.NgayKham)}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Ngày hoàng hành :</div>
            <div className='info__content'>{getFormattedDate(dataPrint?.NgayKham)}</div>
          </div>
        </div>

        <div className='singed'>
          <div className='singed__date'>Hồ chí minh Ngày {date.getDate()} tháng {date.getMonth() + 1} năm {date.getFullYear()} </div>
          <div className='singed__title'>Bác sĩ khám bệnh</div>
          <div className='singed__content'></div>
        </div>

        <p className='bottom'></p>
      </div>
    </>

  )
}

export default PrintMedicalResult