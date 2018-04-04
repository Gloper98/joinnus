import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './components/App';
import reducer from './reducers/reducer';

const store = createStore(reducer);
  
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
