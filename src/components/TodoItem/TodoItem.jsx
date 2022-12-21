import React, { useRef, useState } from 'react';

import styles from './TodoItem.module.css';

const TodoItem = ({ todoId, onUpdate, onDelete, isCompleted, todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef(todo);

  return (
    <li className={styles['item-container']}>
      {isEdit ? (
        <div className={styles['todo-container']}>
          <input
            ref={inputRef}
            defaultValue={todo}
            className={`${styles['todo-text']} ${styles.input}`}
          />
          <div className={styles['button-container']}>
            <button
              onClick={() => {
                onUpdate({
                  id: todoId,
                  todo: inputRef.current.value,
                  isCompleted,
                });
                setIsEdit(false);
              }}
            >
              제출
            </button>
            <button onClick={() => setIsEdit(false)}>취소</button>
          </div>
        </div>
      ) : (
        <div className={styles['todo-container']}>
          <p
            onClick={() =>
              onUpdate({ id: todoId, todo, isCompleted: !isCompleted })
            }
            className={`${isCompleted ? styles.complete : null} ${
              styles['todo-text']
            }`}
          >
            {todo}
          </p>
          <div className={styles['button-container']}>
            <button onClick={() => setIsEdit(true)}>수정🖍</button>
            <button onClick={() => onDelete(todoId)}>삭제🗑</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
