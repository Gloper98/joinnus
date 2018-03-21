import { connect } from 'react-redux'
import { showConcertsFilter, showTheaterFilter } from '../actions'
import Events from '../components/Events'
import App from '../components/App'


const mapStateToProps = (state) => {
    const {
        showEvents
      } = state.reducer;
  
      console.log(state.reducer)
      // y devolvemos las nuevas props
      return {
        events: showEvents,
      }
}

const mapDispatchToProps= (dispatch) => {
    return {
        showTheater(id) {
          dispatch(showTheaterFilter(id))
        },
        showConcerts(id) {
           dispatch(showConcertsFilter(id))
        }
      }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)

export default VisibleEventList