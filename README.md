# 회원가입 / 로그인 구현

## 1. 파일 구조

- 로컬 스토리지와 baseURL을 가지는 Axios 생성함수를 utils 폴더에 작성했습니다.

utils/localStorage.js

```js
export const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setStorage = (storageName, token) =>
  localStorage.setItem(storageName, token);
```

utils/myAxios.js

```js
import axios from 'axios';

export const baseAxios = (options) =>
  axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    ...options,
  });

export const tokenAxios = (token, options) => {
  return axios.create({
    baseURL: `${process.env.REACT_APP_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    ...options,
  });
};
```

- email 및 password 의 유효성 검사는 별도로 작성하지 않았습니다.
- Input 컴포넌트와 버튼 컴포넌트를 작성해 각각 로그인, 회원가입 페이지에 사용하였습니다.

```
└─src
  │  App.css
  │  App.js
  │  index.css
  │  index.js
  │
  ├─components
  │  ├─Input
  │  │      Input.jsx
  │  │      Input.module.css
  │  │
  │  ├─SignButton
  │  │      SignButton.jsx
  │  │      SignButton.module.css
  │  │
  │  └─TodoItem
  │          TodoItem.jsx
  │          TodoItem.module.css
  │
  ├─pages
  │  ├─Home
  │  │      Home.jsx
  │  │      Home.module.css
  │  │
  │  ├─SignIn
  │  │      SignIn.jsx
  │  │
  │  ├─SignUp
  │  │      SignUp.jsx
  │  │
  │  └─TodoList
  │          TodoList.jsx
  │          TodoList.module.css
  │
  └─utils
          localStorage.js
          myAxios.js
```

## 로그인 화면

![image](https://user-images.githubusercontent.com/83552466/208837051-0042be9b-014f-40d2-9f3b-cc493d145adb.png)

## 회원가입 화면

![image](https://user-images.githubusercontent.com/83552466/208837157-98622609-8e58-418a-9ac7-6f3a9abe4c06.png)

## 구현 기능

### Assignment1 이메일, 비밀번호 유효성 검사기능

- [x] 이메일 조건: @ 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

```js
const [isActive, setIsActive] = useState(false);

const handleChange = () => {
  const emailValid = emailRef.current.value.includes('@');
  const passwordValid = passwordRef.current.value.length >= 8;
  emailValid && passwordValid ? setIsActive(true) : setIsActive(false);
  return;
};
```

요구사항 이상의 유효성 검사는 하지 않았고
onChage핸들러를 할당해서 입력시 유효성 검사 및 활성화 를 수행하도록 했습니다.

### Assignment2 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동해주세요

- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 /todo 경로로 이동
- [x] 응답받은 JWT는 로컬 스토리지에 저장

```js
const handleSignIn = (e) => {
  e.preventDefault();

  const formData = {
    email: emailRef.current.value,
    password: passwordRef.current.value,
  };

  axios
    .post(`/auth/signin`, formData)

    .then(({ data }) => {
      const { access_token } = data;
      setStorage('token', access_token);
    })

    .then(() => {
      alert('로그인 성공했습니다');
      navigate('/todo');
    })

    .catch(
      (
        { response: { data } }, //
      ) => alert(data.message),
    );
};
```

호출 성공시 로컬스토리지에 토큰을 저장하고 `/todo` 경로로 이동합니다

### Assignment3 로그인 여부에 따른 리다이렉트 처리를 구현해주세요

- [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
- [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트

```js
useEffect(() => {
  try {
    const token = getToken();
    if (token) {
      navigate('/todo', { replace: true });
    }
  } catch (e) {
    console.log(e);
  }
}, [navigate]);
```

```js
useEffect(() => {
  const token = getToken();

  if (!token) {
    navigate('/', { replace: true });
  }
}, [navigate]);
```
