import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign_in } from './actions';

function App(){

    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();
    return(
      <div>
        <h1>React Redux</h1>
          <h2>Counter {counter}</h2>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          {isLogged ? <h3>You are Log in</h3> : <h3>you are not log In</h3>}
          <button onClick={() => dispatch(sign_in())}>sign in</button>
      </div>
    );
}

export default App;