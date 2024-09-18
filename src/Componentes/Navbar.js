// Importando React
import React from 'react';
// Importando o CSS
import './Navbar.css';
import FavoriteList from './FavoriteList';

import {Link} from 'react-router-dom';
function Navbar(){
  return (
    <nav className="Navbar">
      <div className="navbar-left">
        <div className="logo">Logo</div>
      </div>
      <div className="navbar-center">
        <Link exact to="/">Home</Link>
        <Link exact to="/dashboard">Dashboard</Link>
      </div>
      <div className="navbar-right">
        <FavoriteList num={0}/>
      </div>
    </nav>
  );
};

export default Navbar;