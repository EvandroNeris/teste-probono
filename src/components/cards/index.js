/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import {
  Container, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import _ from 'lodash';
import './styles.css';
import Button, { ButtonSmall } from '../buttons';
import HeaderCard from '../header-card';
import { getDetails } from '../../services/api';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: _.get(this.props, 'data'),
      modalIsOpen: false,
      details: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumit = this.handleSumit.bind(this);
  }

  async componentDidMount() {
    const details = await getDetails();
    this.setState({ details: _.get(details, 'data', []) });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSumit(event) {
    event.preventDefault();
  }

  toggleModal() {
    const { modalIsOpen } = this.state;
    this.setState({
      modalIsOpen: !modalIsOpen,
    });
  }

  render() {
    const { value, modalIsOpen } = this.state;
    const {
      id, user, userCPF, exAdverso,
    } = value;
    return (
      <Container className="main-card">
        <Modal isOpen={modalIsOpen} className="modal">
          <ModalHeader className="modal-header">Sentença</ModalHeader>
          <ModalBody>
            Tem dispositivo a ser inserido?
            <ButtonSmall title="Sim" />
            <ButtonSmall title="Não" />
          </ModalBody>
        </Modal>
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
          <Button title="informar" method={() => this.toggleModal()} />
        ) : (
          <>
            <Button type="show" title="visualizar" id={id} />
            <Button type="edit" title="editar" method={() => this.toggleModal()} />
          </>
        )}
      </Container>
    );
  }
}

export default Card;
