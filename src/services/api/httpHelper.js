import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.sampleapis.com",
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export const get = async (url, config) => {
  return axiosInstance.get(url, config);
};
