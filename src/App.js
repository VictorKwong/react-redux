import React, {Component} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

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
          {isLogged ? <h3>You are Log in</h3> : ''}
      </div>
    );
}

export default App;