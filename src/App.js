import { HashRouter } from 'react-router-dom';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
