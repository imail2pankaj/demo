import axios from "axios";


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  function (config) {

    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token.replaceAll('"', "")}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (err) => {
    const originalConfig = err.config;
    // console.log(err ,'axios-instance')
    if (originalConfig?.url !== "/login" && err?.response) {
      
      // Access Token was expired
      if ((err?.response?.status === 401 || err?.response?.status === 403) && !originalConfig?._retry) {
        originalConfig._retry = true;
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("user")
        window.location.href = "/login";
      }
        const customError = {
          status: err.response?.status || 500,
          message: err.response?.data?.message || "Something went wrong!",
          data: err.response?.data || null,
        };
        return Promise.reject(customError);
      }
    }

    const customError = {
      status: err.response?.status || 500,
      message: err.response?.data?.message || "Something went wrong!",
      data: err.response?.data || null,
    };

    return Promise.reject(customError);
  }
);

export default axiosInstance;
