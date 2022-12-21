import { postLogin } from '../utils/axios-fn';

function Home() {
  postLogin();
  return <div>Home</div>;
}

export default Home;
