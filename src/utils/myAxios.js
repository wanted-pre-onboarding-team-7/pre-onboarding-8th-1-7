import axios from "axios";

export const baseAxios = (options) =>
  axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    ...options,
  });

export const tokenAxios = (token, options) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};
