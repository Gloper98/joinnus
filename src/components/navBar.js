import React from 'react';

const NavBar = ({events, showTheater, showConcerts}) => (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo teal-text text-lighten-2">Joinnus</a>
      <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li id="theater"><a onClick={evt => {
           showTheater(evt.target.parentNode.id);
          }
        }>Theater</a></li>
        <li id="concerts"><a onClick={evt => {
           showConcerts(evt.target.parentNode.id);
          }
        }>Concerts</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li id="theater"><a onClick={evt => {
           showTheater(evt.target.parentNode.id);
          }
        }>Theater</a></li>
        <li id="concerts"><a onClick={evt => {
           showConcerts(evt.target.parentNode.id);
          }
        }>Concerts</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;