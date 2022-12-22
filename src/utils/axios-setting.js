import axios from 'axios';
import { getLocalStorageToken } from './local-storage-fn';

const baseURL = 'https://pre-onboarding-selection-task.shop';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
};

export const authAxios = axios.create({
  baseURL,
  headers,
});

authAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();
  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

authAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { response: errorResponse } = error;
    const errorResp = error.response.data.message;
    // 인증 에러 발생시
    if (
      errorResponse.status === 401 &&
      error.response.data.message === 'Unauthorized'
    ) {
      alert('아이디와 비밀번호를 확인해주세요.');
      window.location.href = '/';
    } else {
      alert(errorResp);
    }

    return Promise.reject(error);
  },
);
