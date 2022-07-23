import { toast } from 'react-toastify';
import * as request from '../utis/request';


export const getScheduleWithBS = async (MaBS) => {
  try {
    const res = await request.get("schedule", {
      params: {
        MaBS: MaBS,
      },
    });
    if (res.errCode === 0) {
      return res.schedules
    } else {
      toast(res.errMessage)
    }

  } catch (error) {
    console.log(error);
  }
}

export const createSchedule = async (data) => {
  try {
    const res = await request.post("schedule/create-schedule", data);
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

export const updateSchedule = async (data) => {
  try {
    const res = await request.put("schedule/update-schedule", data);
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

export const deleteSchedule = async (id) => {
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
