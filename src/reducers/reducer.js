import INIT_STATE from './data-reducer';
import App from '../components/App';

const Reducer = (state = INIT_STATE, action) => {
  switch(action.type){
    case 'SHOW_SEATS':
      let newSeatsState= true;
      console.log(state.showSeats);
      return {...state, showSeatsState:newSeatsState}
    case 'SELECTED':
      let newA = [];
      let newTotalArr = [];
      let newNumber= 0;
      state.seats.map((seat)=>{
        if(seat.id === action.id){
          if(seat.color === 'lime'){
            newA.push({...seat, color: 'dodgerblue'});
          } else {
            newA.push({...seat, color: 'lime'});
          }
        } else {
        newA.push({...seat});
      }
      });
      newA.map((e)=>{
        if(e.color === 'lime'){
          newTotalArr.push(e.value);
         }
      })
      console.log(newTotalArr);
      let newTotal=newTotalArr.reduce((a, b) => a + b, 0);
      newNumber = newTotalArr.length;
      return {...state,number: newNumber,total: newTotal, seats: newA};
    default:
      return state;
  }
};

export default Reducer;