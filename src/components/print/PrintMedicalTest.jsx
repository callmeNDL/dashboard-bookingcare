
import './printMedicalEx.scss'
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import HeaderPrint from './HeaderPrint';

function PrintMedicalTest() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dataPrint = useSelector((state) => state.print.medicalExamination.current)

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(), // get only two digits
      month = datePart[1], day = datePart[2];
    return day + '/' + month + '/' + year;
  }
  const date = new Date();

  return (
    <>
      <button className="btn btn--green" onClick={handlePrint}><LocalPrintshopIcon />In phiếu xét nghiệm</button>
      <div className='print-medicalExamination' ref={componentRef}>
        <HeaderPrint />
        <div className='info-medical'>
          <p>Mã phiếu khám: {dataPrint.data?.MaPK}</p>
          <p>Mã bệnh nhân: {dataPrint.dataBooking?.MaUser}</p>
          <p>Mã phiếu xét nghiệm:{dataPrint.data?.id} </p>

        </div>
        <h1 className='title'>PHIẾU XÉT NGHIỆM</h1>

        <div className='user'>
          <div className='info'>
            <div className='info__title'>Tên phiếu xét ngiêm :</div>
            <div className='info__content'>{dataPrint.data.TenPXN}</div>
          </div>
          <div className='info  info--with50 '>
            <div className='info__title'>Bác sĩ chỉ định :</div>
            <div className='info__content'>{dataPrint.dataBooking.Doctor?.MaBS}-{dataPrint.dataBooking.Doctor?.HoTen}</div>
          </div>
          <div className='info  info--with50 '>
            <div className='info__title'>Bác sĩ xét nghiệm :</div>
            <div className='info__content'>{dataPrint.data.Doctor?.MaBS}-{dataPrint.data.Doctor?.HoTen}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Họ tên bệnh nhân:</div>
            <div className='info__content'>{dataPrint.dataBooking.User?.HoTen}</div>
          </div>
          <div className='info info--with25'>
            <div className='info__title'>Ngày sinh :</div>
            <div className='info__content'>{formatDate(dataPrint.dataBooking.User?.NgaySinh)}</div>
          </div>
          <div className='info info--with25'>
            <div className='info__title'>Giới tính :</div>
            <div className='info__content'>{dataPrint.dataBooking.User?.GioiTinh ? "Nam" : "Nữ"}</div>
          </div>
          <div className='info '>
            <div className='info__title'>Địa chỉ :</div>
            <div className='info__content'>{dataPrint.dataBooking.User?.DiaChi}</div>
          </div>

          <div className='info '>
            <div className='info__title'>Kết quả :</div>
            <div className='info__content'>{dataPrint.data?.KetQua}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Ngày xét nghiệm :</div>
            <div className='info__content'>{formatDate(dataPrint.data?.NgayXN)}</div>
          </div>
          <div className='info info--with50'>
            <div className='info__title'>Ngày lấy mẫu :</div>
            <div className='info__content'>{formatDate(dataPrint.data?.updatedAt)}</div>
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

export default PrintMedicalTest