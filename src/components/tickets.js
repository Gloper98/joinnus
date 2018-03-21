import React from 'react';

const info = 
{
  place: 'concert',
  placeName: 'Jockey Club',
  title: 'LP Tour',
  about: 'Laura Pergolizzi (born March 18, 1981)[2] is an American singer and songwriter who performs under the stage name LP. She has released four albums and one EP. She has written songs for other artists including Cher, Rihanna, the Backstreet Boys, Rita Ora and Christina Aguilera.',
  address: 'Avenida Javier Prado Surco 6345',
  img: 'https://images-na.ssl-images-amazon.com/images/I/C1PasNDgbZS._CR0,0,3840,2880_._SL1000_.png',
  tickets: [
      {
          zone: 'general',
          adults: 80,
          elderly: 70,
          kids: 40,
          disabled: 50,
      },
      {
          zone: 'platinium',
          adults: 90,
          elderly: 80,
          kids: 50,
          disabled: 60,
      },
      {
          zone: 'VIP',
          adults: 100,
          elderly: 90,
          kids: 60,
          disabled: 70,
      },
      {
          zone: 'gold',
          adults: 110,
          elderly: 100,
          kids: 70,
          disabled: 80,
      }
  ],
  seats:[
      {
          zone: 'general',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'general',
          type: 'adults',
          code: '40-A',
          price: 80,
      },
      {
          zone: 'general',
          type: 'eldery',
          code: '20-J',
          price: 70,
      },
      {
          zone: 'general',
          type: 'disabled',
          code: '10-N',
          price: 50,
      },
      {
          zone: 'Platinium',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'Platinium',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'Platinium',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'Platinium',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'VIP',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'VIP',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'VIP',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'VIP',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'gold',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'gold',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'gold',
          type: 'kids',
          code: '30-B',
          price: 40,
      },
      {
          zone: 'gold',
          type: 'kids',
          code: '30-B',
          price: 40,
      }
  ]
};

const Tickets = () => (
    <div className="container-fluid events">
     <div className="row feed">
     <div className="col s12">
    <h2 className="header">{info.title}</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src={info.img}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{info.about}</p>
          <ul className="collection">
            <li className="collection-item">{info.place}</li>
            <li className="collection-item">{info.placeName}</li>
            <li className="collection-item">{info.title}</li>
            <li className="collection-item"><i className="material-icons orange-text text-lighten-2">add_location</i>{info.address}</li>
          </ul>
        </div>
        <div className="card-action">
        {info.tickets.map((ticket) => {
          return (
            <div className="chip">
            <p>{ticket.zone} <span className="price teal lighten-2">S/.{ticket.adults}</span></p>
              
            </div>
          )
        })}
    </div>
    </div>
    </div>
  </div>
     </div>
  </div>
);

export default Tickets;