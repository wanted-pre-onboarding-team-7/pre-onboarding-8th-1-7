import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/todos"
        element={
          <PrivateRoute>
            <Todos />
          </PrivateRoute>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* TODO: Error boundary 확인  */}
    </Routes>
  );
}

export default Router;
