import { toast } from 'react-toastify';
import * as request from '../utis/request';


export const updateUser = async (user, navigate) => {
  try {
    const res = await request.put("user/update-user", user);
    if (res.errCode === 0) {
      return navigate(`/users`)
    } else {
      toast.error(res.errMessage)
    }
  } catch (error) {
    console.log(error);
  }
}
