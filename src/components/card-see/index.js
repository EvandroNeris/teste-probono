/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import _ from 'lodash';
import { ButtonLarge } from '../buttons';
import HeaderCard from '../header-card';
import './styles.css';
import { getDetails, getCase } from '../../services/api';

class CardSee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {},
      users: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }

  async componentDidMount() {
    const data = await getDetails(_.get(this.props, 'data'));
    const user = await getCase(_.get(data.data, 'id'));

    this.setState({
      value: _.get(data, 'data', []),
      users: _.get(user, 'data', []),
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSumit(event) {
    event.preventDefault();
  }

  render() {
    const { value, showInput, users } = this.state;
    const { user, userCPF, exAdverso } = users;
    const { lawsuit, processNumber } = value;
    return (
      <div className="main-card">
        <HeaderCard id={lawsuit || 0} />
        <div className="body-card">
          <form id="sentence">
            <div className="block">
              <div className="column1">
                <input
                  type="text"
                  value={user}
                  onChange={this.handleChange}
                  name="user"
                  placeholder="Nome"
                />
                <input
                  type="text"
                  value={processNumber}
                  onChange={this.handleChange}
                  placeholder="Numero do processo"
                />
              </div>
              <div className="column2">
                <input
                  type="text"
                  value={userCPF}
                  onChange={this.handleChange}
                  name="userCPF"
                  placeholder="CPF"
                />
                <input
                  type="text"
                  value={exAdverso}
                  onChange={this.handleChange}
                  name="exAdverso"
                  placeholder="Ex Adverso"
                />
              </div>
            </div>
            <div className="block2">
              {showInput === 'true' ? <h4 className="label">Dispositivo:</h4> : null}
              {showInput === 'true' ? <textarea name="text" rows="5" /> : null}
              <h4 className="label">O que aconteceu?</h4>
              <textarea name="text" rows="5" />
              <h4 className="label">O que vai acontecer?</h4>
              <textarea name="text" rows="5" />
              {showInput === 'true' ? (
                <select>
                  <option>Teste</option>
                </select>
              ) : null}
            </div>
          </form>
          <div />
        </div>
        <ButtonLarge title="Editar" />
      </div>
    );
  }
}

export default CardSee;
