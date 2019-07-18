/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Navbar from '../components/navbar';

import './style.css';
import CardSentence from '../components/card-sentence';

class Sentence extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="body">
          <CardSentence data={{}} />
        </div>
      </>
    );
  }
}

export default Sentence;
