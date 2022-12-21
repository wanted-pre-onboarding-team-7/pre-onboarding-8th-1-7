import styled from 'styled-components';

export default function TodoContents({
  children,
  checkBoxColor,
  onClickCheckbox = () => {},
}) {
  return (
    <TodoContentsWrapper>
      <TodoCheckbox bgColor={checkBoxColor} onClick={onClickCheckbox} />
      {children}
    </TodoContentsWrapper>
  );
}

const TodoContentsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const TodoCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid black;
  background-color: ${(props) => props.bgColor};
`;
