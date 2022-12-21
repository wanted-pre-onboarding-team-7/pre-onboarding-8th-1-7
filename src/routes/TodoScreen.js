import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLocalStorageHasToken } from '../utils/local-storage-fn';

export default function TodoScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    redirectHome(!isLocalStorageHasToken());
  }, []);

  const redirectHome = (condition) => {
    if (condition) {
      navigate('/');
    }
  };
  return <div>Todo</div>;
}
