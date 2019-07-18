import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navbar = () => (
  <div className="main">
    <div>
      <h2 className="logo">probono</h2>
    </div>
    <ul className="menu-main">
      <li className="menu-item">
        <Link to="/register">Cadastro</Link>
      </li>
      <li className="menu-item">
        <Link to="/register">Preparação</Link>
      </li>
      <li className="menu-item">
        <Link to="/register">Casos</Link>
      </li>
      <li className="menu-item">
        <Link to="/register">Atividades</Link>
      </li>
      <li className="menu-item">
        <Link to="/register">Calculadora</Link>
      </li>
      <li className="menu-item">
        <Link to="/register">Audiências</Link>
      </li>
      <li className="menu-item logout">
        <Link to="/register">Logout</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
