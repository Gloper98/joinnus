import React from 'react';
import { connect } from 'react-redux';
import '../css/main.css';

const Tickets = () => (
  <div className="container-fluid events">
   <div className="row feed">
   <div className="col s12">
  <h2 className="header">LP Tour</h2>
  <div className="card horizontal">
    <div className="card-image">
      <img src='https://images-na.ssl-images-amazon.com/images/I/C1PasNDgbZS._CR0,0,3840,2880_._SL1000_.png'/>
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <p>Laura Pergolizzi (born March 18, 1981)[2] is an American singer and songwriter who performs under the stage name LP. She has released four albums and one EP. She has written songs for other artists including Cher, Rihanna, the Backstreet Boys, Rita Ora and Christina Aguilera.</p>
        <ul className="collection">
          <li className="collection-item">Concert</li>
          <li className="collection-item">Jockey Club</li>
          <li className="collection-item">Lost on you</li>
          <li className="collection-item"><i className="material-icons orange-text text-lighten-2">add_location</i>Avenida Javier Prado Surco 3782 Jockey Club del Peru</li>
        </ul>
      </div>
      <div className="card-action">
     
          <div className="chip">
          <p>Platinium<span className="price teal lighten-2">S/.200.00</span></p>
            
          </div>
  </div>
  </div>
  </div>
</div>
   </div>
</div>
);

const NavBar = () => (
  <nav>
  <div className="nav-wrapper">
    <a href="/" className="brand-logo teal-text text-lighten-2">Joinnus</a>
    <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
    <ul className="right hide-on-med-and-down">
      <li id="theater"><a >Theater</a></li>
      <li id="concerts"><a >Concerts</a></li>
    </ul>
    <ul className="side-nav" id="mobile-demo">
      <li id="theater"><a>Theater</a></li>
      <li id="concerts"><a >Concerts</a></li>
    </ul>
  </div>
</nav>
);

const App = ({color, selected, seats}) => (
  <div className="App">
  <NavBar/>
  <Tickets/>
  <div className="col s12">
          <div className="card">
            <div className="card-image center-align">
            {seats.map((seat)=> {
      return(
        <svg id={seat.id} key={seat.code} height="50" width="50">
           <circle cx="25" cy="25" r="10" stroke={seat.color} fill={seat.color} onClick={(event)=>{
          selected(seat.id);
        }} />
        </svg>
      )
    })}
            </div>
            <div className="card-content grey lighten-3">
              <p className="center getTicket"><a className="waves-effect waves-light btn ticket-btn orange darken-3">buy tickets</a></p>
            </div>
            <div className="card-action">
            <div className="collection">
            {seats.map((seat)=>{
    if(seat.selection){
      return(
        <a href="#!" className="collection-item" key={seat.code}><span className="new badge">S/.{seat.price}</span>{seat.category} - {seat.id}</a>
      )
    }
  })}
            </div>
            </div>
          </div>
        </div>
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
