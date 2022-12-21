import React from 'react';
import { useState } from 'react';
import LoginComponent from '../components/auth/LoginComponent';
import SignUpComponent from '../components/auth/SignUpComponent';
const LoginPage = () => {
  const [loginOrSignUp, setLoginOrSignUp] = useState(true);

  return (
    <div>
      {loginOrSignUp ? (
        <LoginComponent setLoginOrSignUp={setLoginOrSignUp} />
      ) : (
        <SignUpComponent setLoginOrSignUp={setLoginOrSignUp} />
      )}
    </div>
  );
};

export default LoginPage;
