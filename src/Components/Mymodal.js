import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Mymodal = ({ show, handleClose, title, body }) => {
  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      centered
      size='lg'
      dialogClassName="modal-80w"
      aria-labelledby="example-custom-modal-styling-title"
      >

    <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default Mymodal;
