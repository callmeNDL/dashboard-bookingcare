import * as request from '../utis/request';


export const getBookingWithBS = async (MaBS) => {
  try {
    const res = await request.get("booking/get-with-doctor", {
      params: {
        MaBS: MaBS,
      },
    });
    if (res.errCode === 0) {
      return res.bookings
    } else {
      console.log(res.errMessage);
    }

  } catch (error) {
    console.log(error);
  }
}
