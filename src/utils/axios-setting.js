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

authAxios.interceptors.response.use(() => {
  // TODO: Assignment 2.2 response handle 작성
});
