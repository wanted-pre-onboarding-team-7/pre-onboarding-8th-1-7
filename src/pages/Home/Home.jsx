import React, { useRef, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { setStorage } from '../../utils/localStorage';
import { baseAxios } from '../../utils/myAxios';
import { validation } from '../../utils/validation';

import styles from './Home.module.css';
import Input from '../../components/Input/Input';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const axios = baseAxios();

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isActive, setIsActive] = useState(false);

  const clearInput = () => {
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

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

  const handleSignUp = (e) => {
    e.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post(`/auth/signup`, formData)

      .then(() => {
        alert('가입 되었습니다.');
        clearInput();
        navigate('/');
        emailRef.current.focus();
      })

      .catch(
        (
          { response: { data } }, //
        ) => alert(data.message),
      );
  };

  const handleChange = () => {
    const validated =
      validation('email', emailRef.current.value) &&
      validation('password', passwordRef.current.value);
    validated ? setIsActive(true) : setIsActive(false);
    return;
  };

  const handleMove = (path) => () => {
    clearInput();
    navigate(path);
    emailRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Input
          type="email"
          placeholder="이메일을 입력 해 주세요."
          onChange={handleChange}
          ref={emailRef}
        >
          Email
        </Input>
        <Input
          type="password"
          placeholder="비밀번호를 입력 해 주세요."
          onChange={handleChange}
          ref={passwordRef}
        >
          Password
        </Input>
        <Routes>
          <Route
            path="/"
            element={
              <SignIn
                disabled={!isActive}
                onSignIn={handleSignIn}
                onMove={handleMove}
              />
            }
          />
          <Route
            path="/sign-up"
            element={
              <SignUp
                disabled={!isActive}
                onSignUp={handleSignUp}
                onMove={handleMove}
              />
            }
          />
        </Routes>
      </form>
    </div>
  );
};

export default Login;
