import './styles/App.css';
import AuthDispatchers from './state/auth/dispatchers';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // const value = useSelector((state: CounterStore) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={() => AuthDispatchers.signup(dispatch)}>Signup</button>
      <button onClick={() => AuthDispatchers.login(dispatch)}>Login</button>
      <button onClick={() => AuthDispatchers.logout(dispatch)}>Logout</button>
    </div>
  );
}

export default App;