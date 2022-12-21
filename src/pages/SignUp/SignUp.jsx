import React from 'react';
import SignButton from '../../components/SignButton/SignButton';

const SignUp = ({ disabled, onSignUp, onMove }) => {
  return (
    <SignButton
      disabled={disabled}
      onSubmit={onSignUp}
      onMove={onMove('/')}
      texts={['가입하기', '로그인 페이지로']}
    />
  );
};

export default SignUp;
