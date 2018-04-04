import React from 'react';
import { connect } from 'react-redux';
import Tickets from './tickets';
import NavBar from './navBar';
import BuyTickets from './buyTickets';
import '../css/main.css';

const App = ({color, selected, seats, showSeats, total, number, showSeatsState}) => (
  <div className="App">
    <NavBar/>
    <Tickets/>
    <BuyTickets selected={selected} seats={seats} showSeats={showSeats} showSeatsState={showSeatsState} total={total} number={number}/>
  </div>
);

const mapStateToProps = ({color, seats, total, number, showSeatsState}) => ({
  showSeatsState,
  number,
  total,
  color,
  seats
});

const mapDispatchToProps = (dispatch) => ({
  selected(id){
    dispatch({ type: 'SELECTED', 
               id
    })
  },
  showSeats(){
    dispatch({ type: 'SHOW_SEATS',
               
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
