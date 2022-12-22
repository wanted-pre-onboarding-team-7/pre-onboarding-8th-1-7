import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createTodoAPI } from '../../lib/api/todo/createTodo';
import { deleteTodoAPI } from '../../lib/api/todo/deleteTodo';
import { getTodoAPI } from '../../lib/api/todo/getTodos';
import { upDateTodoAPI } from '../../lib/api/todo/updateTodo';
import getDateString from '../../lib/utils/getDate';

import TodoHeader from '../components/todo/TodoHeader';
import TodoList from '../components/todo/TodoList';
import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';

const TodoListPage = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const { dateString } = getDateString();

  const onClickLogout = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/');
  }, []);

  const onChangeCreateInput = useCallback(
    (e) => {
      const text = e.target.value;
      setInputValue(text);
    },
    [inputValue],
  );

  const onSubmitTodo = useCallback(
    async (e) => {
      e.preventDefault();
      await createTodo();
      await getTodos();
      setInputValue('');
    },
    [inputValue, todoList],
  );

  const onToggleDone = useCallback(
    async (id, todo, isCompleted) => {
      await updateTodo(id, todo, isCompleted);
      await getTodos();
    },
    [todoList],
  );

  const onClickRemove = useCallback(
    async (id) => {
      await deleteTodo(id);
      await getTodos();
    },
    [todoList],
  );

  const updateEditTodo = async (id, todo, isCompleted) => {
    await updateTodo(id, todo, isCompleted);
    await getTodos();
  };

  const getTodos = async () => {
    try {
      const data = await getTodoAPI();
      setTodoList(data);
    } catch (e) {
      alert('요청하신 데이터를 불러올 수 없습니다.');
    }
  };

  const createTodo = async () => {
    try {
      const params = { todo: inputValue };
      await createTodoAPI(params);
    } catch (e) {
      alert('요청하신 데이터를 추가 할 수 없습니다.');
    }
  };

  const updateTodo = async (id, todo, isCompleted) => {
    try {
      const param = {
        todo,
        isCompleted,
      };
      await upDateTodoAPI(id, param);
    } catch (e) {
      alert('요청하신 데이터를 처리할 수 없습니다.');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
    } catch (e) {
      alert('요청하신 데이터를 처리할 수 없습니다.');
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/');
    getTodos();
  }, []);

  return (
    <Container>
      <TodoHeader onClick={onClickLogout} today={dateString} />
      <TodoList
        todos={todoList}
        onToggleDone={onToggleDone}
        onClickRemove={onClickRemove}
        updateEditTodo={updateEditTodo}
      />
      <TodoCreate
        value={inputValue}
        onChange={onChangeCreateInput}
        onSubmit={onSubmitTodo}
      />
    </Container>
  );
};

export default memo(TodoListPage);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 620px;
  background-color: #fffbe9;
`;
