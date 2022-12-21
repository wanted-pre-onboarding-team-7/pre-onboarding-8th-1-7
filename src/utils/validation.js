/**
 * 로그인시 아이디와 비밀번호 유효성검사
 * @param values email,password,checkPassword 값을 가지는 객체
 * @returns 통과하면 true를 반환
 */
export const validation = (values) => {
  if (values.email.match(/@/) && values.password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

/**
 * 회원가입시 비밀번호 확인해주는 함수
 * @param values email,password,checkPassword 값을 가지는 객체
 * @returns 비밀번호와 비밀번호 확인이 일치하면 true 반환
 */
export const validationSignUp = (values) => {
  if (values.password === values.checkPassword) {
    return true;
  }
  return false;
};
