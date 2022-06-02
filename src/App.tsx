import React, { useState } from 'react';
import './styles/App.css';
import CountDispatchers from './state/dispatchers';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const value = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{value}</p>
      <button onClick={() => CountDispatchers.increment(dispatch)}>Increment</button>
      <button onClick={() => CountDispatchers.decrement(dispatch)}>Decrement</button>
    </div>
  );
}

export default App;
