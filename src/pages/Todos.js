import styled from 'styled-components';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ToDoContext from '../context/ToDoContext';
import { theme } from '../theme';

export default function Todos() {
  return (
    <Wrapper bgColor={theme.bgColorlight}>
      <Title>Todo list</Title>
      <ToDoContext>
        <TodoForm />
        <TodoWrapper>
          <TodoList />
        </TodoWrapper>
      </ToDoContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TodoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`;
