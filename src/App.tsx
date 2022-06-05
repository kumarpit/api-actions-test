import { useState } from 'react';
import './styles/App.css';
import AuthDispatchers from './state/auth/dispatchers';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const access_token = useSelector((state: any) => state.auth.access_token);
  const refresh_token = useSelector((state: any) => state.auth.refresh_token);
  const status = useSelector((state: any) => state);
  console.log(status);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}/>
      <input type="text" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
      <button onClick={() => AuthDispatchers.signup(dispatch, username, password)}>Signup</button>
      <button onClick={() => AuthDispatchers.login(dispatch, username, password)}>Login</button>
      <button onClick={() => AuthDispatchers.echo(dispatch)}>Echo</button>
      <button onClick={() => AuthDispatchers.logout(dispatch)}>Logout</button>
      <button onClick={() => AuthDispatchers.token(dispatch)}>Refresh Token</button>
      <h3>{access_token}</h3>
      <h3>{refresh_token}</h3>
    </div>
  );
}

export default App;
