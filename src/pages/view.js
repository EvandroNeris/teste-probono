/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Navbar from '../components/navbar';

import './style.css';
import CardSentence from '../components/card-sentence';

class View extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Navbar />
        <div className="body">
          <CardSentence data={match.params} />
        </div>
      </>
    );
  }
}

export default View;
