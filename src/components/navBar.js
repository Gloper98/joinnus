import React from 'react';

const NavBar = () => (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo teal-text text-lighten-2">Joinnus</a>
      <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Theater</a></li>
        <li><a href="/">Concerts</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="/">Theater</a></li>
        <li><a href="/">Concerts</a></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;