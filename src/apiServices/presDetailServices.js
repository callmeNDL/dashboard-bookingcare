import * as request from '../utis/request';
import { getWithMaDTSuccess, getWithMaDTStart, getWithMaDTFailed } from '../redux/prescriptionDetailSlide';
import { toast } from 'react-toastify';

export const getDTDetail = async (MaDT, dispatch) => {
  dispatch(getWithMaDTStart());
  try {
    const res = await request.get("prescriptionDetail/getDetail", {
      params: {
        MaDT: MaDT,
      },
    });
    dispatch(getWithMaDTSuccess(res.preDetails.prescriptionDetails));
    return res.preDetails.prescriptionDetails;
  } catch (error) {
    dispatch(getWithMaDTFailed());
  }
}

export const createPrescriptionDetail = async (data) => {
  try {
    const res = await request.post("prescriptionDetail/create-prescriptionDetail", data);
    if (res.errCode === 0) {
      toast.success(res.message)
    } else {
      toast.error(res.errMessage)
    }
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const updatePrescriptionDetail = async (data) => {
  try {
    const res = await request.put("prescriptionDetail/update-prescriptionDetail", data);
    if (res.errCode === 0) {
      toast.success(res.message)
    } else {
      toast.error(res.errMessage)
    }
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const deletePrescriptionDetail = async (id) => {
  console.log(id);
  try {
    const res = await request.delet(`schedule/delete-schedule?id=${id}`);
    if (res.errCode === 0) {
      return toast.success(res.errMessage)
    } else {
      return toast.error(res.errMessage)
    }
  } catch (error) {
    console.log(error);
  }
}