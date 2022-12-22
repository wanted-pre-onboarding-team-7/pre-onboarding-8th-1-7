import styled from 'styled-components';
import { useState, useRef } from 'react';

function TodoForm() {
  const [newTodo, setNewTodo] = useState();
  const inputRef = useRef();
  const changeHadler = (evt) => {
    const {
      target: { value },
    } = evt;
    setNewTodo(value);
  };

  return (
    <>
      {' '}
      <Form>
        <TodoInput
          ref={inputRef}
          placeholder="Add task"
          onChange={changeHadler}
        />
        <AddBtn>add</AddBtn>
      </Form>
    </>
  );
}

const Form = styled.form`
  width: 100%;
  padding: 20px 0;
`;
const TodoInput = styled.input`
  width: 72%;
  height: 30px;
  border: none;
  background-color: #d1d1d1;
  padding: 0 10px;
  margin-right: 10px;
`;
const AddBtn = styled.button`
  width: 60px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.theme.accentColor};
  color: white;
`;

export default TodoForm;
