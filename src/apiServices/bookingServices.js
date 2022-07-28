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

export const getBookingWithBN = async (MaUser) => {
  try {
    const res = await request.get("booking/by-user", {
      params: {
        MaUser: MaUser,
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

export const getBookingWithMaDL = async (MaDL) => {
  try {
    const res = await request.get("booking/get-with-madl", {
      params: {
        MaDL: MaDL,
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


