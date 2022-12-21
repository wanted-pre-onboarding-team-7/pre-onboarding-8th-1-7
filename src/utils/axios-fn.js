import axios from 'axios';
import { getLocalStorageToken } from './local-storage-fn';

const baseURL = 'https://pre-onboarding-selection-task.shop';
const headers = {
  'Access-Control-Allow-Origin': '*', // CORS ?
  'Content-Type': 'application/json',
};

export const preconfigedAxios = axios.create({
  baseURL,
  headers,
});

preconfigedAxios.interceptors.request.use((config) => {
  const accessToken = getLocalStorageToken();

  if (accessToken && config.headers) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

const handleError = (error) => {
  if (error.response) {
    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
    // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
    // node.js에서는 http.ClientRequest 인스턴스입니다.
    console.log(error.request);
  } else {
    // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
    console.log('Error', error.message);
  }
  //   console.log(error.config);
};

export const postLogin = async (userData, handleReponse = () => {}) => {
  preconfigedAxios
    .post(
      '/auth/signup',
      { email: 'sky@abc.com', password: '12345678' },
      {
        // 상태코드가 해당 조건인 경우에만 then으로 이동. 아니면 error catch
        validateStatus: (status) => status === 200 && status === 201,
      },
    )
    .then((response) => {
      handleReponse();
      console.log('resolved');
    })
    .catch((error) => {
      handleError(error);
      console.log('error occured');
    });
};
// export const postLogin = async (userData, handleReponse) => {
//   preconfigedAxios
//     .post('/auth/signup', userData, {
//       validateStatus: (status) => status === 200 && status === 201,
//     })
//     .then((response) => {
//       handleReponse();
//     })
//     .catch((error) => {
//       handleError(error);
//     });
// };

export const postSignup = async (userData, handleReponse) => {
  preconfigedAxios
    .post('/auth/signin', userData)
    .then((response) => {
      handleReponse();
    })
    .catch((error) => {
      handleError(error);
    });
};
