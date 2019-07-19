/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import _ from 'lodash';
import Navbar from '../components/navbar';
import './style.css';
import CardSee from '../components/card-see';

class View extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Navbar />
        <div className="body">
          <CardSee data={_.get(match.params, 'id')} />
        </div>
      </>
    );
  }
}

export default View;
