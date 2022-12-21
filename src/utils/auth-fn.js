import axios from 'axios';
import { RES_MSG } from './constants';

export const API_URL = 'https://pre-onboarding-selection-task.shop';
const SIGN_URL = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/signin`,
};

export const postAuth = async (data, signState, handlePostResponse) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .post(SIGN_URL[signState], data, config)
    .then((response) => {
      const { access_token: token } = response.data;
      handlePostResponse(RES_MSG.SUCCESS(signState), token);
    })
    .catch((error) => {
      handlePostResponse(RES_MSG.FAIL(signState));
    });
};
