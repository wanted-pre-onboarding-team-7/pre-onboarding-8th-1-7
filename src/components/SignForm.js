import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { postAuth } from '../utils/auth-fn';
import { SUBMIT_BTN } from '../utils/constants';
import TextInput from './TextInput';

export default function SignForm({ signState, handlePostResponse }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    setForm(initialForm);
  }, [signState]);

  const handleChange = (e) => {
    setForm((prev) => {
      const newForm = { ...prev, [e.target.id]: e.target.value };
      return newForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAuth(form, signState, handlePostResponse);
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
`;
const initialForm = {
  email: '',
  password: '',
};
