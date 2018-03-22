import React from 'react';

const BuyTickets = ({seats, color, selected}) => {
  return(
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
          <div className="card-content grey lighten-3 align-center">
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
  )
}

export default BuyTickets;