import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="app-nav">
        <img className="app-nav-logo" src={require("../../media/logo-symbol.svg")} alt="helpful human logo"/>
        <input className="app-nav-search" type="text" placeholder="Search" />
      </nav>
    );
  }
}

export default Nav;
