/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import _ from 'lodash';
import './styles.css';
import Button from '../buttons';
import HeaderCard from '../header-card';
import { getDetails } from '../../services/api';
import Modals from '../modal';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: _.get(this.props, 'data'),
      modalShow: false,
      details: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }

  async componentDidMount() {
    const details = await getDetails(1);
    this.setState({ details: _.get(details, 'data', []) });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSumit(event) {
    event.preventDefault();
  }

  render() {
    const { value, modalShow } = this.state;
    console.log(value);
    const {
      id, user, userCPF, exAdverso,
    } = value;
    return (
      <Container className="main-card">
        <Modals show={modalShow} onHide={() => this.setState({ modalShow: false })} />
        <HeaderCard id={id || 0} />
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
          <Button title="informar" method={() => this.setState({ modalShow: true })} />
        ) : (
          <>
            <Button type="show" title="visualizar" id={id} />
            <Button type="edit" title="editar" method={() => this.setState({ modalShow: true })} />
          </>
        )}
      </Container>
    );
  }
}

export default Card;
