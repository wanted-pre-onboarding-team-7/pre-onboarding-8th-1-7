import axios from './axios';

export const Signin = async (values) => {
  const response = await axios.post(`/auth/signin`, values);

  return response;
};

export const Signup = async (values) => {
  const response = await axios.post(`/auth/signup`, values);

  return response;
};

export const getTodos = async () => {
  const response = await axios.get('/todos');

  return response;
};
