import React from 'react';
import { connect } from 'react-redux';
import Tickets from './tickets';
import NavBar from './navBar';
import BuyTickets from './buyTickets';
import '../css/main.css';

const App = ({color, selected, seats}) => (
  <div className="App">
    <NavBar/>
    <Tickets/>
    <div id="container"></div>
    <BuyTickets color={color} selected={selected} seats={seats}/>
  </div>
);

const mapStateToProps = ({color, seats}) => ({
  color,
  seats
});

const mapDispatchToProps = (dispatch) => ({
  selected(id){
    dispatch({ type: 'SELECTED', 
    id
  })
}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
