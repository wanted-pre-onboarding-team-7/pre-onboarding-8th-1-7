import { Navigate } from 'react-router-dom';

function Todo() {
  const token = localStorage.getItem('token');

  return <>{!token && <Navigate to="/" replace={true} />}</>;
}

export default Todo;
