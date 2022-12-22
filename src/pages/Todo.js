import Container from '../styles/Container';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getTodos } from '../api/api';
// import {useNavigate} from "react-router-dom";
import TodoItem from '../components/todo/TodoItem';
import TodoForm from '../components/todo/TodoForm';

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    refresh();
  }, []);
  const refresh = async () => {
    const resp = await getTodos();
    setTodos(resp.data);
  };
  return (
    <Container>
      <Logout>로그아웃</Logout>
      <Title>Todo List</Title>
      <TodoForm />
      <TodoList>
        {todos.length ? (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <EmptyBox>할일을 추가해주세요!</EmptyBox>
        )}
      </TodoList>
    </Container>
  );
}
const TodoList = styled.div`
  height: 400px;
  overflow: auto;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`;
const Logout = styled.p`
  font-size: 13px;
  text-align: end;
  color: ${(props) => props.theme.accentColor};
  text-decoration: underline;
  cursor: pointer;
`;
const EmptyBox = styled.p`
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-top: 40px;
`;

export default Todo;
