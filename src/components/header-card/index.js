/* eslint-disable react/prop-types */
import React from 'react';
import './styles.css';

const HeaderCard = ({ id }) => (
  <div className="header-card">
    <h2 className="title-header-card">Sentença</h2>
    <h2 className="id-header-card">{`#${id}`}</h2>
  </div>
);

export default HeaderCard;
