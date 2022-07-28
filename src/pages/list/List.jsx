import './list.scss'
import Datatable from '../../components/datatable/Datatable'
import { getUser } from '../../redux/userSlide';
import { getDoctor } from '../../redux/doctorSlide';
import { getRole } from '../../redux/roleSlide';
import { getClinic } from '../../redux/clinicSlide';
import { getDepartment } from '../../redux/departmentSlide';
import { getSchedule } from '../../redux/scheduleSlide';
import { getBooking } from '../../redux/bookingSlide';
import { getMedicalExamination } from '../../redux/medicalExamination';
import { getMedicalTest } from '../../redux/medicalTest';
import { getPrescription } from '../../redux/prescriptionSlide';
import { getMedicine } from '../../redux/medicineSlide';
import { getPrescriptionDetail } from '../../redux/prescriptionDetailSlide';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import AppLayout from '../../layout/Layout';
import { getBookingWithBS } from "../../apiServices/bookingServices";

const List = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [renderCallBack, setRenderCallBack] = useState(false);

  const loginRole = useSelector((state) => state.auth.login.currentUser)


  const getData = async () => {
    if (props.title === "users") {
      let actionResult = await dispatch(getUser());
      const dataUser = unwrapResult(actionResult);
      setData(dataUser)
    }
    if (props.title === "doctors") {
      let actionResult = await dispatch(getDoctor());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "roles") {
      let actionResult = await dispatch(getRole());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "clinics") {
      let actionResult = await dispatch(getClinic());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "departments") {
      let actionResult = await dispatch(getDepartment());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "schedules") {
      let actionResult = await dispatch(getSchedule());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "bookings") {
      if (loginRole.MaBS && loginRole.MaBS.length !== 0) {
        const bookingWithDoctor = await getBookingWithBS(loginRole.MaBS);
        setData(bookingWithDoctor)
      }
      else {
        let actionResult = await dispatch(getBooking());
        const dataResult = unwrapResult(actionResult);
        setData(dataResult)
      }
    }
    if (props.title === "medicalExaminations") {
      if (loginRole.MaBS && loginRole.MaBS.length !== 0) {
        let actionResult = await dispatch(getMedicalExamination());
        const dataResult = unwrapResult(actionResult);
        const medicalWithDoctor = dataResult.filter((item) => item.Booking.MaBS === loginRole.MaBS);
        setData(medicalWithDoctor)
      }
      else {
        let actionResult = await dispatch(getMedicalExamination());
        const dataResult = unwrapResult(actionResult);
        console.log(dataResult);
        setData(dataResult)
      }
    }
    if (props.title === "medicalTests") {
      if (loginRole.MaBS && loginRole.MaBS.length !== 0) {
        let actionResult = await dispatch(getMedicalTest());
        const dataResult = unwrapResult(actionResult);
        const medicalTestWithDoctor = dataResult.filter((item) => item.MaBS === loginRole.MaBS);
        setData(medicalTestWithDoctor)
      }
      else {
        let actionResult = await dispatch(getMedicalTest());
        const dataResult = unwrapResult(actionResult);
        setData(dataResult)
      }
    }
    if (props.title === "prescriptions") {
      if (loginRole.MaBS && loginRole.MaBS.length !== 0) {
        let actionResult = await dispatch(getPrescription());
        const dataResult = unwrapResult(actionResult);
        const prescriptionWithDoctor = dataResult.filter((item) => item.MaBS === loginRole.MaBS);
        setData(prescriptionWithDoctor)
      }
      else {
        let actionResult = await dispatch(getPrescription());
        const dataResult = unwrapResult(actionResult);
        setData(dataResult)
      }

    }
    if (props.title === "medicines") {
      let actionResult = await dispatch(getMedicine());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "prescriptionDetails") {
      let actionResult = await dispatch(getPrescriptionDetail());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
  }

  const rerenderParentCallback = () => {
    setRenderCallBack(!renderCallBack)
  }

  useEffect(() => {
    getData();
  }, [props.title, renderCallBack])

  return (
    <div className=''>
      <AppLayout >
        <Datatable data={data} colum={props.colum} title={props.title} titleApi={props.titleApi} rerenderParentCallback={rerenderParentCallback} />
      </AppLayout>
    </div>
  )
}

export default List