import axiosClient from "./axiosClient";

const userApi = {
  getAll: (params) => {
    const url = '/user';
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
}

export default userApi;