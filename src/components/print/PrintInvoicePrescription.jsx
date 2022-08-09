
import './printMedicalEx.scss'
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import HeaderPrint from './HeaderPrint';

function PrintInvoicePrescription() {
  const date = new Date();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dataPrint = useSelector((state) => state.print.invoicePrescription.current)

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(), // get only two digits
      month = datePart[1], day = datePart[2];
    return day + '/' + month + '/' + year;
  }

  console.log(dataPrint);
  return (
    <>
      <button className="btn btn--secondary" onClick={handlePrint}><LocalPrintshopIcon />In hoá đơn thuốc</button>
      <div className='print-medicalExamination' ref={componentRef}>
        <HeaderPrint />
        <div className='info-medical'>
          <p>Mã bệnh nhân: {dataPrint.dataDT?.MaUser}</p>
          <p>Mã đơn thuốc: {dataPrint.dataDT?.MaDT}</p>
        </div>

        <h1 className='title'>HOÁ ĐƠN THUỐC</h1>

        <div className='user'>
          <div className='info info--with50'>
            <div className='info__title'>Họ tên :</div>
            <div className='info__content'>{dataPrint.dataDT.User?.HoTen}</div>
          </div>
          <div className='info info--with25'>
            <div className='info__title'>Ngày sinh :</div>
            <div className='info__content'>{formatDate(dataPrint.dataDT.User?.NgaySinh)}</div>
          </div>
          <div className='info info--with25'>
            <div className='info__title'>Giới tính :</div>
            <div className='info__content'>{dataPrint.dataDT.User?.GioiTinh ? "Nam" : "Nữ"}</div>
          </div>
          <div className='info '>
            <div className='info__title'>Địa chỉ :</div>
            <div className='info__content'>{dataPrint.dataDT.User?.DiaChi}</div>
          </div>
          <div className='info '>
            <div className='info__title'>Chuẩn đoán :</div>
            <div className='info__content'>{dataPrint.dataDT?.TinhTrang}</div>
          </div>
        </div>

        <div className='list-medicine invoice'>
          <div className='list-medicine__title invoice__title'>
            <p>Thuốc điều trị</p>
            <div className='count'>Số lượng  <p>Thành tiền</p></div>
          </div>
          {dataPrint.dataDTDetail?.map((item, index) => {
            return (
              <div className='wrap invoice-pres-detail'>
                <div className='stt'>{index + 1}</div>
                <div className='medicine' key={item.id}>
                  <div className='medicine__name'>{item.Medicine.TenThuoc}</div>
                  <div className='medicine__count invoice-pres-detail__count'>X {item.SoLuong}</div>
                  <div className='medicine__unit invoice-pres-detail__unit'>{item.Medicine.DonVi}</div>
                  <div className='medicine__unit invoice-pres-detail__dollar'>{item.TongTienThuoc.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>

                  <div className='medicine__desc'>{item.LieuLuong}</div>
                </div>
              </div>
            )
          })}
          <div className='total-money'>
            <div className='total-money__title'>Tổng tiền: {(Math.round(dataPrint.dataDT.TongTienThuoc / 1000) * 1000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
          </div>
          <div className='advice'>
            <div className='advice__title'>Lời dặn bác sĩ :</div>
            <div className='advice__content'>Đã tư vấn kỹ cho bệnh nhân về đơn thuốc và bệnh nhân đồng ý với sử dụng, khám lại sau {dataPrint.dataDTDetail[0]?.SoNgayUong} ngày</div>
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

export default PrintInvoicePrescription