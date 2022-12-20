import { client } from '../client';

export const signUpAPI = async (user) => {
  const url = '/auth/signup';
  const headers = { 'Content-Type': 'application/json' };
  const response = await client.post(url, user, { headers: headers });
  return response;
};
