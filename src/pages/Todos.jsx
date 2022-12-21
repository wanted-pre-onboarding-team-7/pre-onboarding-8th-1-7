import React, { useEffect } from 'react';
import { getItem } from '../utils/localStorage';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getItem('loginToken');
    if (!token) {
      navigate('/');
    }
  }, []);
  return <div>Todos</div>;
};

export default Todos;
