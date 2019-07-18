/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import _ from 'lodash';
import Button, { ButtonLarge } from '../buttons';
import HeaderCard from '../header-card';
import './styles.css';

class CardSentence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: _.get(this.props, 'data'),
      showInput: _.get(this.props, 'show').insert,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSumit(event) {
    event.preventDefault();
  }

  render() {
    const { value, showInput } = this.state;
    const { user, userCPF, exAdverso } = value;
    return (
      <div className="main-card">
        <HeaderCard id={0} />
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
                <input type="text" onChange={this.handleChange} placeholder="Numero do processo" />
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
            <Button title="Anexar documento" />
            <Button title="Sem documento" />
          </form>
          <div />
        </div>
        <ButtonLarge title="concluir" />
      </div>
    );
  }
}

export default CardSentence;
