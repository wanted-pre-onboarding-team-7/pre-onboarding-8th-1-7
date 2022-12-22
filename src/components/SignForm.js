import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { SIGN_IN, SUBMIT_BTN, RES_MSG } from '../utils/constants';
import TextInput from './TextInput';

export default function SignForm({ signState, setSignState }) {
  const [form, setForm] = useState(initialForm);
  const emailRef = useRef(initialForm.email);
  const passwordRef = useRef(initialForm.password);

  //수창님 부분 코드 : 로그인/회원가입 상태가 변경될때마다 input reset 시키려고..?
  useEffect(() => {
    setForm(initialForm);
  }, [signState]);

  // 지환님 부분 코드
  const handleChange = () => {
    // const isValidated =
    //   validation('email', emailRef.current.value) &&
    //   validation('password', passwordRef.current.value);
    // isValidated ? setIsActive(true) : setIsActive(false);
    // return;
  };

  //API 구현이 안되어 있어 임시적인 회원가입/로그인 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    setSignState(SIGN_IN);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput type="email" value={form.email} onChange={handleChange} />
      <TextInput
        type="password"
        value={form.password}
        onChange={handleChange}
      />
      <SubmitBtn
        type="submit"
        bgColor={theme.btnColor}
        value={SUBMIT_BTN[signState]}
      />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
`;

const SubmitBtn = styled.input`
  border: none;
  font-size: 16px;
  background-color: ${(props) => props.bgColor};
  padding: 12px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
`;
const initialForm = {
  email: '',
  password: '',
};
