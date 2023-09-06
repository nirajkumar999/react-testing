import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HoverableButton = ({ text, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button
      variant="outline-primary"
      className='me-3'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleShow}
    >
      <FontAwesomeIcon
        icon={icon}
        className="hi-s me-2 mx-2"
        style={{ width: '21px', height: '21px' }}
      />
      {isHovered && <span>{text}</span>}
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>   
    
    </>
  );
};

export default HoverableButton;
