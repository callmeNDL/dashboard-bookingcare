import * as request from '../utis/request';
import { getWithMaDTSuccess, getWithMaDTStart, getWithMaDTFailed } from '../redux/prescriptionDetailSlide';
export const getDTDetail = async (MaDT, dispatch) => {
  dispatch(getWithMaDTStart());
  try {
    const res = await request.get("prescriptionDetail/getDetail", {
      params: {
        MaDT: MaDT,
      },
    });
    dispatch(getWithMaDTSuccess(res.preDetails.prescriptionDetails));

  } catch (error) {
    dispatch(getWithMaDTFailed());
  }
}
