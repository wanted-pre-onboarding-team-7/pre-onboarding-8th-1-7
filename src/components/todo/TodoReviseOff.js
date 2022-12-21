import { CHECKBOX_COLOR } from '../../utils/constants';
import TodoBtns from './TodoBtns';
import TodoContents from './TodoContents';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export default function TodoReviseOff({
  todo,
  handleReviseBtn,
  handleDeleteBtn,
}) {
  return (
    <>
      <TodoContents checkBoxColor={CHECKBOX_COLOR[todo.isCompleted]}>
        <TodoText>{todo.todo}</TodoText>
      </TodoContents>
      <TodoBtns
        leftBtn={{ icon: faPen, onClick: handleReviseBtn }}
        rightBtn={{ icon: faTrash, onClick: handleDeleteBtn }}
      />
    </>
  );
}

const TodoText = styled.span`
  font-size: 16px;
`;
