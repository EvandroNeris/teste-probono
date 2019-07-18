/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const ButtonSmall = ({ title, method }) => (title === 'Sim' ? (
  <Link to={`/sentence/${true}`} className="btn-small" onClick={method}>
    {title}
  </Link>
) : (
  <Link to={`/sentence/${false}`} className="btn-small" onClick={method}>
    {title}
  </Link>
));

const Button = ({ title, type, method, id }) => (title === 'informar' ? (
  <button className="btn-differ" onClick={method}>
    {title}
  </button>
) : (
  <Link
    to={type === 'show' ? `/sentence/${id}/view` : '/sentence'}
    className={type === 'show' ? 'btn-differ' : 'btn-differ-edit'}
    onClick={method}
  >
    {title}
  </Link>
));

export const ButtonLarge = ({ title }) => <button className="btn-large">{title}</button>;

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
