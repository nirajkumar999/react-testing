import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mymodal from './Mymodal';


const HoverableButton = ({ text, icon, variant }) => {
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

      <Mymodal
        show={show}
        handleClose={handleClose}
        title="Modal heading"
        body="Woohoo, you are reading this text in a modal!"
      />
    </>
  );
};

export default HoverableButton;
