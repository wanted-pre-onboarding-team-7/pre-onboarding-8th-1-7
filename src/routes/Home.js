// Home
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import SignForm from '../components/SignForm';
import { useNavigate } from 'react-router-dom';
import { checkLocalStorage, saveUserToken } from '../utils/local-storage-fn';
import SignToggleBtn from '../components/SignToggleBtn';
import { HOME_TITLE, SIGN_UP } from '../utils/constants';

export default function Home() {
  const [signState, setSignState] = useState(SIGN_UP);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    redirectTodo(checkLocalStorage());
  }, []);

  const redirectTodo = (condition) => {
    if (condition) {
      navigate('/todo');
    }
  };

  const handlePostResponse = (messeage, token = '') => {
    setMsg(messeage);
    if (token) {
      saveUserToken(token);
      return navigate('/todo');
    }
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{HOME_TITLE[signState]}</Title>
      <FormWrapper>
        <SignToggleBtn signState={signState} setSignState={setSignState} />
        <SignForm
          signState={signState}
          handlePostResponse={handlePostResponse}
        />
        <Message>{msg}</Message>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  background-color: white;
  width: 70%;
  height: 80%;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Message = styled.span`
  margin-top: 10px;
`;
