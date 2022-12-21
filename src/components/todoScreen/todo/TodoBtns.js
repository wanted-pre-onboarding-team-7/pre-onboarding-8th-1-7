import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function TodoBtns({ leftBtn, rightBtn }) {
  return (
    <Btns>
      <FontAwesomeIcon icon={leftBtn.icon} onClick={leftBtn.onClick} />
      <FontAwesomeIcon icon={rightBtn.icon} onClick={rightBtn.onClick} />
    </Btns>
  );
}

const Btns = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
`;
