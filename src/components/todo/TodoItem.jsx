import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';

function TodoItem({ text, id, isCompleted }) {
  const token = localStorage.getItem('token');
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(text);
  const [complete, setComplete] = useState(isCompleted);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 204) window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (isCompleted, check) => {
    try {
      if (check === true) setComplete(!complete);
      const response = await axios.put(
        `${BASE_URL}todos/${id}`,
        {
          todo: updateText,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.status === 200 && check === false) window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {update ? (
        <>
          <input
            type="text"
            value={updateText}
            onChange={(e) => {
              setUpdateText(e.target.value);
            }}
          ></input>
          <button type="button" onClick={() => handleUpdate(complete, false)}>
            제출
          </button>
          <button type="button" onClick={() => setUpdate(false)}>
            취소
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={complete}
            onChange={() => handleUpdate(!complete, true)}
          ></input>
          <span className={complete ? 'completed' : ''}>{text}</span>
          <button type="button" onClick={() => setUpdate(true)}>
            수정
          </button>
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        </>
      )}
    </>
  );
}
export default TodoItem;
