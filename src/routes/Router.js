import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Todos from '../pages/Todos';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* TODO: Error boundary 확인  */}
    </Routes>
  );
}

export default Router;
