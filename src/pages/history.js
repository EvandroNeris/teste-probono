/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import _ from 'lodash';
import Navbar from '../components/navbar';
import { getCases, getDocuments } from '../services/api';
import Card from '../components/cards';
import { ButtonTop } from '../components/buttons';

import './style.css';

class History extends Component {
  constructor() {
    super();
    this.state = {
      cases: [],
    };
  }

  async componentDidMount() {
    const data = await getCases();
    const teste = await getDocuments(10);
    console.log(teste);
    this.setState({
      cases: _.get(data, 'data', []),
    });
  }

  render() {
    const { cases } = this.state;
    return (
      <>
        <Navbar />
        <ButtonTop page="history" />
        <div className="body">
          {_.map(cases, date => (
            <Card key={date.id} data={date} />
          ))}
        </div>
      </>
    );
  }
}

export default History;
