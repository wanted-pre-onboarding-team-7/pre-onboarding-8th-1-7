import { useState } from 'react';
import { validation, validationSignUp } from '../../utils/validation';
import styled from 'styled-components';

// 초기값
const INIT_VAL = {
  email: '',
  password: '',
  checkPassword: '',
};
function AuthForm({ existUser, isUser }) {
  const [values, setValues] = useState(INIT_VAL);

  const changeHandler = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const sumbitHandler = async (evt) => {
    evt.preventDefault();
  };
  /**
   * 로그인-회원가입 활성화 버튼 함수
   * 유효성검사 통과했다는 가정하에
   * 기존회원이면 로그인버튼활성화, 신규회원이면 패스워드체크후 회원가입버튼 활성화
   */
  const disabledHandler = () => {
    if (validation(values)) {
      return existUser ? false : validationSignUp(values) ? false : true;
    }
    return true;
  };
  return (
    <>
      <form onSubmit={sumbitHandler}>
        <InputGroup>
          <InputTitle>아이디</InputTitle>
          <UserInput
            placeholder="아이디를 입력해주세요 (@포함)"
            name="email"
            onChange={changeHandler}
            required
          />
        </InputGroup>
        <InputGroup>
          <InputTitle>비밀번호</InputTitle>
          <UserInput
            placeholder="비밀번호를 입력해주세요 (8자 이상입니다)"
            name="password"
            onChange={changeHandler}
            required
          />
        </InputGroup>
        {!existUser && (
          <InputGroup>
            <InputTitle>
              비밀번호
              <br />
              확인
            </InputTitle>
            <UserInput
              placeholder="비밀번호를 다시 입력해주세요"
              name="checkPassword"
              onChange={changeHandler}
              required
            />
          </InputGroup>
        )}
        <Button disabled={disabledHandler()}>
          {existUser ? '로그인' : '회원가입'}
        </Button>
      </form>
    </>
  );
}

const UserInput = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-radius: 9px;
  padding: 0 10px;
  margin: 10px 0;
`;
const Button = styled.button`
  border: none;
  height: 30px;
  width: 100%;
  background-color: ${(props) =>
    props.disabled === false ? props.theme.accentColor : props.theme.grayColor};
  color: white;
  border-radius: 9px;
  margin: 30px 0;
  cursor: ${(props) => (props.disabled === false ? 'pointer' : '')};
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputTitle = styled.div`
  font-size: 14px;
`;

export default AuthForm;
