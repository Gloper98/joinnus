import { connect } from 'react-redux';

const getEvents = (event, filter) => {
    switch (filter) {
        case 'THEATER':
          return event.filter(e => e.theater)
        case 'CONCERTS':
          return event.filter(e => e.concerts)
        default:
          return event
    }
}