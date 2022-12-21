import { client } from '../client';

export const getTodoAPI = async () => {
  const url = '/todos';
  const userToken = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${userToken}` };
  const response = await client.get(url, { headers: headers });
  return response.data;
};
