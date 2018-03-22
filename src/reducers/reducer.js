import INIT_STATE from './data-reducer';
import App from '../components/App';

const Reducer = (state = INIT_STATE, action) => {
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
      return {...state, seats: newA};
    default:
      return state;
  }
};

export default Reducer;