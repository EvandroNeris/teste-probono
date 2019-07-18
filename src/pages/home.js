/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navbar from '../components/navbar';
import Card from '../components/cards';
import { ButtonTop } from '../components/buttons';

import './style.css';

class Home extends Component {
  render() {
    return (
      <Container className="body">
        <Navbar />
        <ButtonTop page="new" />
        <Card data={{}} />
      </Container>
    );
  }
}

export default Home;
