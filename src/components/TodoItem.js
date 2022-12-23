import { useContext, useState } from 'react';
import { dispatchContext } from '../context/todoContext';
import { deleteTodos,putTodos } from '../utils/axios-api-fn';
const TodoItem = ({ text, id, isCompleted }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState();
  const [isCompleteByCheckBox, setIsCompleteByCheckBox] = useState(false);
  const clickEdit = () => {
    setIsEdit(!isEdit);
  };
  const dispatch = useContext(dispatchContext);
  const clickEditDoneButton = async () => {
    try {
      if (isCompleteByCheckBox === true)
      setIsCompleteByCheckBox(!isCompleteByCheckBox);
      await putTodos({id,isCompleted,todo:editedText})
      .then((response) => {
        dispatch({type: "EDIT", todo: response});
        clickEdit();
      })
      .catch((error)=>{
        throw new Error(error);
      })
      setEditedText('');
    } catch (error) {
      console.error(error);
      alert('요청하신 데이터를 처리할 수 없습니다. 관리자에게 문의해주세요.');
    }
  };

  const clickRemoveButton = async () => {

      await deleteTodos(id)
      .then(() => {
        dispatch ({type:"DELETE", id})
      })
      .catch((error)=>{
        throw new Error(error)
      })
  
  };
  return isEdit ? (
    <>
      <input
        autoFocus
        type="text"
        value={editedText}
        onChange={(e) => {
          setEditedText(e.target.value);
        }}
      />
      <button type="button" onClick={clickEditDoneButton}>
        제출
      </button>
      <button type="button" onClick={clickEdit}>
        취소
      </button>
    </>
  ) : (
    <>
      <input
        type="checkbox"
        checked={isCompleteByCheckBox}
        onChange={() => setIsCompleteByCheckBox(!isCompleteByCheckBox)}
      />
      <span>{text}</span>
      <button type="button" onClick={clickEdit}>
        수정
      </button>
      <button type="button" onClick={() => clickRemoveButton({id})}>
        삭제
      </button>
    </>
  );
};

export default TodoItem;
