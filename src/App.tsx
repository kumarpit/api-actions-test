import { useState } from 'react';
import './styles/App.css';
import AuthDispatchers from './state/auth/dispatchers';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}/>
      <input type="text" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
      <button onClick={() => AuthDispatchers.signup(dispatch, username, password)}>Signup</button>
      <button onClick={() => AuthDispatchers.login(dispatch)}>Login</button>
      <button onClick={() => AuthDispatchers.echo(dispatch)}>Echo</button>
      <button onClick={() => AuthDispatchers.logout(dispatch)}>Logout</button>
    </div>
  );
}

export default App;