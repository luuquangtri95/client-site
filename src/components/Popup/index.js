import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Popup({ show, onClose, onConfirm, data }) {
  const handleConfirm = () => {
    onConfirm()
  }

  return (
    <Modal show={show} onHide={() => onClose(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          Delete user: <span className='text-danger'>{data.username}</span>{' '}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure ??</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => onClose(false)}>
          Close
        </Button>
        <Button variant='danger' onClick={handleConfirm}>
          Confirm delete user
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Popup
