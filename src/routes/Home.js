// Home
import { useState } from 'react';
import styled from 'styled-components';
import { HOME_TITLE, SIGN_IN, SIGN_UP, TOGGLE_TEXT } from '../utils/auth-fn';
import { theme } from '../theme';
import SignForm from '../components/SignForm';

export default function Home() {
  const [signState, setSignState] = useState(SIGN_UP);

  const handleToggleClick = () => {
    setSignState((prevState) => {
      if (prevState === SIGN_UP) {
        return SIGN_IN;
      }
      return SIGN_UP;
    });
  };

  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{HOME_TITLE[signState]}</Title>
      <FormWrapper>
        <ToggleBtn bgColor={theme.btnColor} onClick={handleToggleClick}>
          <ToggleText>{TOGGLE_TEXT[signState]}</ToggleText>
        </ToggleBtn>
        <SignForm signState={signState} />
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

const ToggleBtn = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
const ToggleText = styled.span`
  font-size: 14px;
  color: white;
`;
