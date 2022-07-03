import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
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
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';


const List = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

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
      let actionResult = await dispatch(getBooking());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "medicalExaminations") {
      let actionResult = await dispatch(getMedicalExamination());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "medicalTests") {
      let actionResult = await dispatch(getMedicalTest());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
    }
    if (props.title === "prescriptions") {
      let actionResult = await dispatch(getPrescription());
      const dataResult = unwrapResult(actionResult);
      setData(dataResult)
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

  useEffect(() => {
    getData();
  }, [props.title])
  console.log("render", props.title);
  return (

    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable data={data} colum={props.colum} title={props.title} titleApi={props.titleApi} />
      </div>
    </div>
  )
}

export default List