import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.sampleapis.com",
});

export const get = async (url, config) => {
  return axiosInstance.get(url, config);
};
