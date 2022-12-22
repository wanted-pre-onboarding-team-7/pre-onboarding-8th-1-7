import { memo, useState } from 'react';

import styled, { css } from 'styled-components';

const TodoItem = ({
  id,
  todo,
  isCompleted,
  onToggleDone,
  onClickRemove,
  updateEditTodo,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  const onChangeEditText = (e) => {
    const text = e.target.value;
    setEditText(text);
  };

  const onClickEditDoneButton = () => {
    updateEditTodo(id, editText, isCompleted);
    setIsEdit(false);
  };

  return isEdit ? (
    <Container>
      <CheckSquere
        isCompleted={isCompleted}
        onClick={() => onToggleDone(id, todo, !isCompleted)}
      >
        {isCompleted && <span>V</span>}
      </CheckSquere>
      <EditText autoFocus value={editText} onChange={onChangeEditText} />
      <EditDoneButton onClick={onClickEditDoneButton}>완료</EditDoneButton>
      <CancelButton onClick={onClickEdit}>취소</CancelButton>
    </Container>
  ) : (
    <Container>
      <CheckSquere
        isCompleted={isCompleted}
        onClick={() => onToggleDone(id, todo, !isCompleted)}
      >
        {isCompleted && <span>V</span>}
      </CheckSquere>
      <Text isCompleted={isCompleted}>{todo}</Text>
      <EditButton onClick={onClickEdit}>수정</EditButton>
      <RemoveButton onClick={() => onClickRemove(id)}>삭제</RemoveButton>
    </Container>
  );
};

export default memo(TodoItem);

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CheckSquere = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin: 10px;
  border: 2px solid #d0c9c0;
  border-radius: 3px;
  background-color: white;
  cursor: pointer;
  ${(props) =>
    props.isCompleted &&
    css`
      border: 2px solid #5f7161;
    `}
`;

const Text = styled.div`
  font-size: 25px;
  margin-left: 20px;
  ${(props) =>
    props.isCompleted &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.div`
  position: absolute;
  margin: 8px 90px 0px 5px;
  right: 0;
  cursor: pointer;
  color: #eee3cb;
  &:hover {
    color: #e97777;
  }
`;

const EditButton = styled.div`
  position: absolute;
  margin: 8px 130px 0px 5px;
  right: 0;
  cursor: pointer;
  color: #eee3cb;
  &:hover {
    color: #8fc1d4;
  }
`;

const EditDoneButton = styled.div`
  position: absolute;
  margin: 8px 130px 0px 5px;
  right: 0;
  border: none;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  color: #8fc1d4;
`;

const CancelButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin: 8px 90px 3px 5px;
  right: 0;
  cursor: pointer;
  color: #e97777;
`;

const EditText = styled.input`
  width: 350px;
  height: 30px;
  margin-left: 20px;
  border: 2px solid #eee3cb;
  border-radius: 5px;
  font-size: 20px;
`;
