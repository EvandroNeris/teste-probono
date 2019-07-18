/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Button = ({ title, type }) => (title === 'informar' ? (
  <button className="btn-differ">{title}</button>
) : (
  <button className={type === 'show' ? 'btn-differ' : 'btn-differ-edit'}>{title}</button>
));

export const ButtonTop = ({ page }) => (
  <div className="bg-btn">
    <Link to="/" className={page === 'new' ? 'btn' : 'btn-press'}>
      novo
    </Link>
    <Link to="/history" className={page === 'history' ? 'btn' : 'btn-press'}>
      histórico
    </Link>
  </div>
);

export default Button;
