import { authAxios, todosAxios } from './axios-setting';

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

export const requestTodos = async (method, propsData = {}) => {
  const { userData = {}, id = '' } = propsData;
  const config = {
    method: method,
    url: `/todos/${id}`,
    data: userData,
  };
  return await todosAxios(config).then((res) => res.data);
};
