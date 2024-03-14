import axios from "axios";

const _axios = axios.create();

export const useAxios = () => {
  _axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Token ${localStorage.getItem("token")}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return _axios;
};

export const baseUrl = "http://52.204.145.148";
