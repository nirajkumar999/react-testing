import React, { useState } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const HoverableButton2 = ({ text, icon, variant, body }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OverlayTrigger
        placement="top" // Set the placement to top for the tooltip
        overlay={<Tooltip id="tooltip-top">{text}</Tooltip>}
      >
        <Button
          variant={variant}
          className='me-2'
          size="sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleShow}
        >
          <FontAwesomeIcon
            icon={icon}
            className="hi-s me-2 mx-2"
            style={{ width: '20px', height: '20px' }}
          />
        </Button>
      </OverlayTrigger>

      <Modal 
      show={show} 
      onHide={handleClose}
      dialogClassName="modal-20w"
      centered>

    <Modal.Header closeButton>
        <Modal.Title>{"Modal Heading"}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{body}</Modal.Body>
    </Modal>
    </>
  );
};

export default HoverableButton2;

HoverableButton2.defaultProps={
  body:"Woohoo, you are reading this text in a modal!",
}