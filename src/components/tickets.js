import React from 'react';

const Tickets = () => (
  <div className="container-fluid events">
    <div className="row feed">
      <div className="col s12">
        <h2 className="header">LP Tour: Laura Pergolizzi</h2>
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
            <p>Platinium<span className="price teal lighten-2">S/.200.0</span></p>
          </div>
          <div className="chip">
            <p>Gold<span className="price teal lighten-2">S/.300.0</span></p>
          </div>
          <div className="chip">
            <p>VIP<span className="price teal lighten-2">S/.500.0</span></p>
          </div>
          <div className="chip">
            <p>General<span className="price teal lighten-2">S/.100.0</span></p>
          </div>
        </div>
      </div>
     </div>
    </div>
   </div>
  </div>
);

export default Tickets;