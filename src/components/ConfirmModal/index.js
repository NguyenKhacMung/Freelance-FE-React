import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ConfirmModal = ({ message, onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
    onConfirm();
    toggleModal();
  };

  return (
    <>
      <Button color="danger" onClick={toggleModal}>
        Delete
      </Button>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Confirm</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button color="danger" onClick={handleConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ConfirmModal;
