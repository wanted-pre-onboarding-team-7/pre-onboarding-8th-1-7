import { memo } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleDone, onClickRemove, updateEditTodo }) => (
  <Container>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onToggleDone={onToggleDone}
        onClickRemove={onClickRemove}
        updateEditTodo={updateEditTodo}
      />
    ))}
  </Container>
);

export default memo(TodoList);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 40px;
`;
