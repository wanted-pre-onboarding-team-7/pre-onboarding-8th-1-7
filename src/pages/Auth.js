import { useState } from 'react';
import styled from 'styled-components';
import Container from '../styles/Container';
import AuthForm from '../components/auth/AuthForm';

function Auth() {
  // 기존 회원인지 판단
  const [existUser, setExistUser] = useState(true);
  /**
   * 회원가입-로그인 상태 변경
   */
  const isUser = () => {
    setExistUser((prev) => !prev);
  };

  return (
    <Container>
      <Title>{existUser ? '로그인' : '회원가입'}</Title>
      <AuthForm existUser={existUser} isUser={isUser} />
      {existUser ? (
        <AuthFooter>
          <span>회원이 아니신가요? </span>
          <span onClick={isUser}>회원가입하기</span>
        </AuthFooter>
      ) : (
        <AuthFooter>
          <span onClick={isUser}>로그인 하러가기</span>
        </AuthFooter>
      )}
    </Container>
  );
}
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
`;
const AuthFooter = styled.div`
  font-size: 14px;
  text-align: center;
  span:last-child {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
    text-decoration: underline;
  }
`;

export default Auth;
