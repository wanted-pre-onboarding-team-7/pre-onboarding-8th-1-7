import { CHECKBOX_COLOR } from '../../utils/constants';
import TodoBtns from './TodoBtns';
import TodoContents from './TodoContents';
import { faX, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function TodoReviseOn({
  children,
  complete,
  handleCheckClicked,
  handleCancelBtn,
  handleUpdateBtn,
}) {
  return (
    <>
      <TodoContents
        checkBoxColor={CHECKBOX_COLOR[complete]}
        onClickCheckbox={handleCheckClicked}
      >
        {children}
      </TodoContents>
      <TodoBtns
        leftBtn={{ icon: faX, onClick: handleCancelBtn }}
        rightBtn={{ icon: faCheck, onClick: handleUpdateBtn }}
      />
    </>
  );
}
