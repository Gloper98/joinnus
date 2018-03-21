import INIT_STATE from './reducer-state';
import { visibilityFilters } from '../actions'

export default (state = INIT_STATE, action) => {
        switch (action.type) {
          case visibilityFilters.SHOW_THEATER || visibilityFilters.SHOW_CONCERTS:
          state = {
            ...state,
            showEvents: state.showEvents.filter(event => {
            let eventPlace = event.place;
            let actionPlace = action.filter;

            let events =[];
      
            if (eventPlace === actionPlace) {
              events.push(event);
            }
            console.log(events);
            return events;
          })};
          break;
          default:
            return state
      }
    return state;
  }