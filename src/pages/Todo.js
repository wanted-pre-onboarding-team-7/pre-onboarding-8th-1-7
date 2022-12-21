import Container from '../styles/Container';
import styled from 'styled-components';
import { removeToken } from '../utils/authToken';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const navigate = useNavigate();
  const delTokenHandler = async () => {
    removeToken();
    navigate('/');
  };
  return (
    <Container>
      <h1>🚀 TodoList 페이지입니다</h1>
      <Logout onClick={delTokenHandler}>로그아웃</Logout>
    </Container>
  );
}
const Logout = styled.p`
  font-size: 13px;
  text-align: end;
  color: ${(props) => props.theme.accentColor};
  text-decoration: underline;
  cursor: pointer;
`;
export default Todo;
