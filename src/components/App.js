import React from 'react';
import { connect } from 'react-redux';

const App = (props) => console.log(props) || (
  <div className="App">
  <button onClick={() => props.dispatch({
    type: 'DECREMENT',
  })}>-</button>
  <span>{props.count}</span>
  <button onClick={() => props.dispatch({
    type: 'INCREMENT',
  })}>+</button>
  </div>
);

const mapStateToProps = ({count}) => ({
  count,
});

export default connect(mapStateToProps)(App);
