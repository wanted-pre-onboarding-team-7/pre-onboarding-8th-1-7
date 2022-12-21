import styled from 'styled-components';
import { useState } from 'react';
import { updateTodo, deleteTodo } from '../../../utils/todo-fn';
import TodoReviseOff from './TodoReviseOff';
import TodoReviseOn from './TodoReviseOn';

export default function Todo({ todo, loadTodos }) {
  const [revise, setRevise] = useState(false);
  const [complete, setComplete] = useState(todo.isCompleted);
  const [text, setText] = useState('');

  const handleReviseBtn = () => {
    setRevise(true);
    setText(todo.todo);
    setComplete(todo.isCompleted);
  };

  const handleDeleteBtn = () => {
    deleteTodo(todo.id, handleDeleteTodo);
  };

  const handleDeleteTodo = (status) => {
    if (status >= 200 && status <= 299) {
      loadTodos();
    }
  };

  const handleCancelBtn = () => {
    if (window.confirm('수정을 취소하시겠습니까?') === true) {
      return setRevise(false);
    }
  };

  const handleUpdateBtn = () => {
    const newTodo = {
      todo: text,
      isCompleted: complete,
    };
    updateTodo(todo.id, newTodo, handleUpdateTodo);
  };

  const handleUpdateTodo = (status) => {
    if (status >= 200 && status <= 299) {
      setRevise(false);
      loadTodos();
    }
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleCheckClicked = () => {
    setComplete((prev) => {
      return !prev;
    });
  };
  return (
    <TodoWrapper>
      {!revise ? (
        <TodoReviseOff
          todo={todo}
          handleReviseBtn={handleReviseBtn}
          handleDeleteBtn={handleDeleteBtn}
        />
      ) : (
        <TodoReviseOn
          complete={complete}
          handleCheckClicked={handleCheckClicked}
          handleCancelBtn={handleCancelBtn}
          handleUpdateBtn={handleUpdateBtn}
        >
          <TodoInput value={text} onChange={handleInputChange} />
        </TodoReviseOn>
      )}
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoInput = styled.input``;
