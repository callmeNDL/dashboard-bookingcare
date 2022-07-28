import './printMedicalEx.scss'
import { useReactToPrint } from 'react-to-print';
import { useEffect, useRef, useState } from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import { useSelector } from 'react-redux';
import HeaderPrint from './HeaderPrint';
import { getBookingWithMaDL } from '../../apiServices/bookingServices';
import { getMedicalExaminationWithMaDL } from '../../apiServices/medicalExamiantionServices';


function PrintMedicalEx() {
  const [dataBooking, setDataBooking] = useState({});
  const [dataMedicalExamination, setDataMedicalExamination] = useState({});

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const MaDL = useSelector((state) => state.print?.MaDL)
  const getBooking = async () => {
    const dataBooking = await getBookingWithMaDL(MaDL);
    setDataBooking(dataBooking);
    const medicalExamination = await getMedicalExaminationWithMaDL(dataBooking.MaDL);
    setDataMedicalExamination(medicalExamination)
  }

  useEffect(() => {
    getBooking();
  }, [])


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

  return (
    <>
      <button className="btn btn--green" onClick={handlePrint}><LocalPrintshopIcon />In phiếu khám</button>
      <div className='print-medicalExamination print-medicalExamination--small' ref={componentRef}>
        <HeaderPrint />
        <h1 className='title'>PHIẾU KHÁM</h1>
        <div className='content'>
          <div className='nameMedical'>{dataMedicalExamination?.TenPK}</div>
          <div className='room'>Phòng khám: {dataMedicalExamination?.MaPhong}</div>
          <div className='code'>Mã Phiếu khám: <span>{dataMedicalExamination?.MaPK}</span></div>
          <div className='user'>
            <div className='name'>{dataBooking.User?.HoTen}</div>
            <div className='user__info'>Mã BN: {dataBooking.User?.MaUser}</div>
            <div className='user__info'>Tuổi: {getAge(dataBooking.User?.NgaySinh)}</div>
            <div className='user__info'>Giới tính: {dataBooking.User?.GioiTinh ? "Nam" : "Nũ"}</div>
          </div>
          <div className='date'>Ngày khám: {(dataMedicalExamination?.NgayKham)} </div>
          <div className='date'>Thời gian : {dataMedicalExamination.CaKham === 'Ca1' ? "08:00 - 11:00" : "13:00 - 17:00"} --- Thời gian khám: {dataMedicalExamination.ThoiGianKham} </div>

        </div>
      </div>
    </>

  )
}

export default PrintMedicalEx