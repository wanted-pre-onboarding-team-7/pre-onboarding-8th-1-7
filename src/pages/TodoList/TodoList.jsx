import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/localStorage";
import { tokenAxios } from "../../utils/myAxios";

import TodoItem from "../../components/TodoItem/TodoItem";
import styles from "./TodoList.module.css";

let axios;

const TodoList = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const handleAddTodo = (e) => {
    e.preventDefault();

    axios
      .post("/todos", { todo: todoInputRef.current.value })
      .then(({ data }) => setTodos((prev) => [...prev, data]))
      .catch(({ response: { data } }) => console.log(data));

    todoInputRef.current.value = "";
  };

  const handleUpdate = useCallback(
    ({ id, todo, isCompleted }) => {
      axios
        .put(`/todos/${id}`, { todo, isCompleted })
        .then(() =>
          setTodos(
            todos.map((prevTodo) =>
              prevTodo.id === id ? { id, todo, isCompleted } : prevTodo
            )
          )
        )
        .catch(({ response: { data } }) => console.log(data));
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));

      axios
        .delete(`/todos/${id}`)
        .catch(({ response: { data } }) => console.log(data));
    },
    [todos]
  );

  useEffect(() => {
    const token = getToken();

    if (!token) {
      navigate("/", { replace: true });
    }

    axios = tokenAxios(token);

    axios
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch(({ response: { data } }) => {
        console.log(data);
      });
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <form className={styles["input-container"]} onSubmit={handleAddTodo}>
          <input
            className={styles.input}
            type="text"
            ref={todoInputRef}
            placeholder="할 일을 입력하세요."
          />
          <button className={styles["add-button"]} type="submit">
            추가
          </button>
        </form>
        <ol className={styles.list}>
          {todos.map(({ id, todo, isCompleted }) => (
            <TodoItem
              key={id}
              todoId={id}
              isCompleted={isCompleted}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              todo={todo}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TodoList;
