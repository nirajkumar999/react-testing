import React from 'react';
import { Modal } from 'react-bootstrap';

const Mymodal = ({ show, handleClose, title, body }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default Mymodal;
