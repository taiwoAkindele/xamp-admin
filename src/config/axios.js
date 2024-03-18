import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

// update axiosInstance
const axiosInstance = axios.create(defaultOptions);

//set the auth token if there's any for any request

axiosInstance.interceptors.request.use(
  (config) => {
    if (config && config.headers) {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

export const createAPIRequest = (config) => axiosInstance(config);
