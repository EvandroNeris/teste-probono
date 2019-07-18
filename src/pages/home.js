/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Card from '../components/cards';
import { ButtonTop } from '../components/buttons';

import './style.css';

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <ButtonTop page="new" />
        <div className="body">
          <Card data={{}} />
        </div>
      </>
    );
  }
}

export default Home;
