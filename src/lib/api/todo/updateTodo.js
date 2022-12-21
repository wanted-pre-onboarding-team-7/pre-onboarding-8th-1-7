import { client } from '../client';

export const upDateTodoAPI = async (id, params) => {
  const url = `/todos/${id}`;
  const userToken = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${userToken}`,
    'Content-Type': 'application/json',
  };
  const response = await client.put(url, params, { headers: headers });
  return response;
};
