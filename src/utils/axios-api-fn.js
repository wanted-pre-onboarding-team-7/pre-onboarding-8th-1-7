import { authAxios } from './axios-setting';

export const postSignin = async (userData) => {
  return authAxios
    .post('/auth/signin', userData)
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const postSignup = async (userData) => {
  return authAxios
    .post('/auth/signup', userData)
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) => {
      alert(error.message);
    });
};
