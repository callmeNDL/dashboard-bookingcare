import * as request from '../utis/request';

export const getMedicalExaminationWithMaDL = async (MaDL) => {
  try {
    const res = await request.get("medicalExamination/get-with-MaDL", {
      params: {
        MaDL: MaDL,
      },
    });
    if (res.errCode === 0) {
      return res.medicalExaminations
    } else {
      console.log(res.errMessage);
    }


  } catch (error) {
    console.log(error);
  }
}


