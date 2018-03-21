import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './components/App';
import reducer from './reducers';
import { BrowserRouter as Router,
 Route} from 'react-router-dom';
import './css/main.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
  
  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
