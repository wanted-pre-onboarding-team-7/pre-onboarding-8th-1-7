import axios from 'axios';

const API_DEFAULT_TIMEOUT = 30 * 1000;

export const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  timeout: API_DEFAULT_TIMEOUT,
});
