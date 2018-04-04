import INIT_STATE from './data-reducer';
import App from '../components/App';

const Reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case 'SELECTED':
      let newA = [];
      state.seats.map((seat)=>{
        if(seat.id === action.id){
          if(!seat.selection && seat.color === 'lime'){
            newA.push({...seat,  color: 'dodgerblue'});
          } else if(!seat.selection && seat.color === 'dodgerblue'){
            newA.push({...seat,  color: 'lime'});
          }
        } else {
        newA.push({...seat});
      }
      });
      return {...state, seats: newA};
    default:
    let showSeats = [];
     state.seats.map((seat)=> {
       if(seat.selection){
         showSeats.push({...seat, color: 'gainsboro'});
       } else {
         showSeats.push({...seat, color: 'dodgerblue'});
       }
     })
     return {...state, seats: showSeats};  
  }
};

export default Reducer;