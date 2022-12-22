import { useState } from 'react';

function TodoItem({ text, id, isCompleted }) {
  const [complete, setComplete] = useState(isCompleted);

  return (
    <>
      <input type="checkbox" checked={complete}></input>
      <span className={complete ? 'completed' : ''}>{text}</span>
      <button type="button">수정</button>
      <button type="button">삭제</button>
    </>
  );
}

export default TodoItem;
