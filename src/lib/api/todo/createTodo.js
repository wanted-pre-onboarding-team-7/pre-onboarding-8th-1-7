import { client } from '../client';

export const createTodoAPI = async (params) => {
  const url = '/todos';
  const userToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${userToken}`,
    'Content-Type': 'application/json',
  };
  const response = await client.post(url, params, { headers: headers });
  return response;
};
