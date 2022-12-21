import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './pages/TodoList/TodoList';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
