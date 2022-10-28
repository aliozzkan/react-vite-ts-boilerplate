import axios, { AxiosInstance } from "axios";

const useInterceptor = (): AxiosInstance => {
  const token = "";
  const isAuth = false;
  const BASE_URL = process.env.REACT_APP_API_URL;

  const instance = axios.create({
    baseURL: BASE_URL,
  });

  // TODO: Culture Code
  // instance.defaults.headers.common["Accept-Language"] = cultureCode;
  if (isAuth) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      const { status } = error.response;

      if (status === 401 || status === 403) {
        // TODO: LOGOUT Function
      }

      if (status === 500) {
        // toast.error("500 Internal Server Error");
        // TODO: EVENT 500 Service
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default useInterceptor;
