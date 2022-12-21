import axios from './axios';

export const Signin = async (values) => {
  const response = await axios.post(`/auth/signin`, values);

  return response;
};

export const Signup = async (values) => {
  const response = await axios.post(`/auth/signup`, values);

  return response;
};
