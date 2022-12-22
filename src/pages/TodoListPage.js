import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToDoContext from "../context/ToDoContext";
import ToDoInput from '../components/todo/ToDoInput';
import ToDoList from '../components/todo/ToDoList';
import styled from 'styled-components';
const TodoListPage = () => {
  
  const navigate =useNavigate()
  useEffect(()=>{
    const user =localStorage.getItem("access_token")
    if(!user) {
      navigate("/")
    }
  },[])
   
  const onClickLogOut = () => {
     localStorage.removeItem("access_token")
     navigate("/")
  }
  return (
    <div>
    <Header>TODO LIST<LogOut onClick={()=>onClickLogOut()}>로그아웃</LogOut></Header>
     <ToDoContext>
         <ToDoInput/>
         <ToDoList/>
         
     </ToDoContext>
   </div>
  )
};
const Header =styled.div`
font-size:30px;

`
const LogOut = styled.button`

`

export default TodoListPage;
