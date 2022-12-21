import axios from 'axios';
export const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
});
