import {useState} from 'react';
import styled from 'styled-components'
import { theme } from '../theme';

import SignToggleBtn from '../components/SignToggleBtn';
import SignForm from '../components/SignForm';
function Home() {
  const [signState, setSignState] = useState();
 
  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>{}</Title>
      <FormWrapper>
        <SignToggleBtn signState={signState} setSignState={setSignState} />
        <SignForm
          signState={signState}
        />
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

export default Home;
