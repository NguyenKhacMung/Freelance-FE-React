import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.scss'

export function BaseModel({ isOpen, toggle, children, onAction, title, ...props }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true} {...props}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onAction}>
          Save
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}