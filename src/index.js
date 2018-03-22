import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './components/App';

const SEATS = [
  {
    id: 'A-1',
    code: '4363',
    selection: false,
    color: 'grey',
    category: 'kids',
    price: 50,
    zone: 'general'
  },
  {
    id: 'A-2',
    code: '9568',
    selection: true,
    color: 'red',
    category: 'adults',
    price: 80,
    zone: 'VIP'
  },
  {
    id: 'A-3',
    code: '8456',
    selection: false,
    color: 'grey',
    category: 'adults',
    price: 60,
    zone: 'platinium'
  },
  {
    id: 'A-4',
    code: '0598',
    selection: false,
    color: 'grey',
    category: 'kids',
    price: 50,
    zone: 'general'
  },
  {
    id: 'A-5',
    code: '7358',
    selection: false,
    color: 'grey',
    category: 'kids',
    price: 70,
    zone: 'VIP'
  },
  {
    id: 'B-1',
    code: '9308',
    selection: true,
    color: 'red',
    category: 'elderly',
    price: 70,
    zone: 'general'
  },
  {
    id: 'B-2',
    code: '9503',
    selection: true,
    color: 'red',
    category: 'elderly',
    price: 70,
    zone: 'general'
  },
  {
    id: 'B-3',
    code: '3508',
    selection: true,
    color: 'red',
    category: 'elderly',
    price: 70,
    zone: 'general'
  }
]

const reducer = (state = {
  seats: SEATS,
}, action) => {
  switch(action.type){
    case 'SELECTED':
    let newA = [];
    state.seats.map((seat)=>{
      if(seat.id === action.id){
       if(seat.selection){
         newA.push({...seat, selection: false, color: 'grey'});
       } else {
        newA.push({...seat, selection: true, color: 'red'});
       }
    } else {
      newA.push({...seat});
    }
    });
    console.log(newA);
    return {...state, seats: newA};
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
