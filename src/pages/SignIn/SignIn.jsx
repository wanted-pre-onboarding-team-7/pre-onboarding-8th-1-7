import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignButton from '../../components/SignButton/SignButton';
import { getToken } from '../../utils/localStorage';

const SignIn = ({ disabled, onSignIn, onMove }) => {
  const navigate = useNavigate();

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

  return (
    <SignButton
      disabled={disabled}
      onSubmit={onSignIn}
      onMove={onMove('/sign-up')}
      texts={['로그인', '회원가입']}
    />
  );
};

export default SignIn;
