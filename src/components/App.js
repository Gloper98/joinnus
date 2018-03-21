import React from 'react';
import NavBar from './navBar';
import Events from './events';
import Tickets from './tickets';
//import Events from '../containers/events.js' <Events />

const App = () => (
  <div className="App">
    <NavBar />
    <Tickets />
  </div>
);

export default App;
