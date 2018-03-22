import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './components/App';

const reducer = (state = {
  count: 0,
}, action) => {
  switch(action.type){
    case 'INCREMENT':
    return {count: state.count + 1};
    case 'DECREMENT':
    return {count: state.count - 1};
    default:
    return state;
  }
};

const store = createStore(reducer);
  
  render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
  )
