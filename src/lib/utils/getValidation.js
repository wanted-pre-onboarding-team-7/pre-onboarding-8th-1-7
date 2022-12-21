/**
 * 로그인, 회원가입 페이지에서 입력받은 아이디 또는 비밀번호의 유효성을 검사하는 함수
 * @param {string} type 로그인, 회원가입시 입력받는 값의 id (ex. email 또는 password)
 * @param {*} value 로그인, 회원가입시 입력받는 값
 * @returns 주어진 요구사항에 따라 true 또는 false를 반환
 */
const getValidation = (type, value) => {
  const regexp = {
    email:
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    password: /^.{8,30}$/,
  };
  return regexp[type].test(value);
};

export default getValidation;
