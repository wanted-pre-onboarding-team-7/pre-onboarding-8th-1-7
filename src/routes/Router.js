import { Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
import Todo from '../pages/Todo';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}
