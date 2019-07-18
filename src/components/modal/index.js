import React from 'react';
import { Modal } from 'react-bootstrap';
import { ButtonSmall } from '../buttons';
import './styles.css';

const Modals = props => (
  <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">Sentença</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4 style={{ paddingTop: '50px' }}>Tem dispositivo a ser inserido?</h4>
      <div style={{ paddingTop: '40px' }}>
        <ButtonSmall title="Sim" />
        <ButtonSmall title="Não" />
      </div>
    </Modal.Body>
    <Modal.Footer />
  </Modal>
);

export default Modals;
