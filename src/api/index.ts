import axios from "axios";
// import { Notifications } from "../components";

const baseURL = import.meta.env.VITE_DB_URL;
// const accessToken = localStorage.getItem("accessToken");

const defaultHeaders = {
  "Content-Type": "application/json",
  // Authorization: "Bearer " + accessToken,
};

const axiosInstance = axios.create({
  baseURL,
  headers: defaultHeaders,
});

// axiosInstance.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//       config.headers.Authorization = "Bearer " + accessToken;
//     }
//     return config;
//   },

//   function (error) {
//     if (error.response?.status === 401) {
//       const accessToken = localStorage.getItem("accessToken");
//       if (accessToken) {
//         localStorage.removeItem("accessToken");
//         Notifications({
//           title: "Error",
//           description: "Session expired",
//           type: "error",
//           key: "token",
//         });
//         window.location.href = `/${ROUTES_CONSTANTS.LOGIN}`; // Redirect user to login page
//       }
//     }
//     return Promise.reject(error);
//   }
// );

const handleResponse = async (response: any) => await response.data;

const handleError = async (error: any) => {
  let errorMessage;
  if (error?.response) {
    errorMessage = error.response.data?.message;
  } else if (error?.request) {
    errorMessage = error?.request;
  } else {
    errorMessage = error?.message;
  }
  // Notifications({
  //   title: "Error",
  //   description: errorMessage,
  //   type: "error",
  //   key: "token",
  // });
};

const get = (url: any, params = {}, headers = {}) =>
  axiosInstance
    .get(url, { headers, params })
    .then(handleResponse)
    .catch(handleError);

const post = (url: any, data = {}, config: any = {}) =>
  axiosInstance
    .post(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...config.headers },
    })
    .then(handleResponse)
    .catch(handleError);

const put = (url: any, data = {}, config: any = {}) =>
  axiosInstance
    .put(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...config.headers },
    })
    .then(handleResponse)
    .catch(handleError);

const patch = (url: any, data = {}, config: any = {}) =>
  axiosInstance
    .patch(url, data, {
      ...config,
      headers: { ...defaultHeaders, ...config.headers },
    })
    .then(handleResponse)
    .catch(handleError);

const del = (url: any, config: any = {}, data = {}) =>
  axiosInstance
    .delete(url, {
      ...config,
      headers: { ...defaultHeaders, ...config.headers },
      data,
    })
    .then(handleResponse)
    .catch(handleError);

export default {
  get,
  post,
  put,
  patch,
  delete: del,
};
