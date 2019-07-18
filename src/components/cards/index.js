/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import _ from 'lodash';
import './styles.css';
import Button from '../buttons';
import HeaderCard from '../header-card';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: _.get(this.props, 'data'),
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
    const { value } = this.state;
    const {
      id, user, userCPF, exAdverso,
    } = value;
    return (
      <div className="main-card">
        <HeaderCard id={id} />
        <div className="body-card">
          <form>
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
          </form>
          <div />
        </div>
        {_.isEmpty(id) ? (
          <Button title="informar" />
        ) : (
          <>
            <Button type="show" title="visualizar" />
            <Button type="edit" title="editar" />
          </>
        )}
      </div>
    );
  }
}

export default Card;
