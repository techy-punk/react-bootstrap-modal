import React, { useState } from 'react';// import useState from React
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  'bootstrap/dist/css/bootstrap.min.css';
const SiteModal  =  () => {  // our functional  component

  const [show, setShow] = useState(false);// decalring hook  
  //function to set show property false or true 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
  <>
      <Button variant="primary" onClick={handleShow}>
        Launch modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo at fermentum hendrerit. Fusce eget accumsan dolor. Morbi accumsan, tortor a sollicitudin ultricies, eros ex venenatis neque, sit amet hendrerit dolor ipsum id est. Suspendisse quis risus eu sem luctus sodales.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>
  );
  }
export default SiteModal;