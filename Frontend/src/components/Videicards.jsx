//import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Videicards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card style={{ width: '100%' }} className='p-1' onClick={handleShow}>
      <Card.Img variant="top" heigh src="https://th.bing.com/th/id/OIP.NFoNJeWWgxCgka2-WVUmOgHaKf?rs=1&pid=ImgDetMain" />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>Card Title</Card.Title>
        
        <Button variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="514" src="https://www.youtube.com/embed/B2UBMTA57JI?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
     
      </Modal>
    </>
  )
}

export default Videicards
