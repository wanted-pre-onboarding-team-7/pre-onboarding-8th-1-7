import { getToken } from '../utils/authToken';
import Axios from 'axios';

// 요청 보낼때마다 헤더에 토큰 담아서 보내기
const axios = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axios.interceptors.request.use(
  (config) => {
    if (config.headers) {
      const token = getToken();
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default axios;
