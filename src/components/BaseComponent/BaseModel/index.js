import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BaseButton } from '../BaseButton';
import './style.scss'

export function BaseModel({ isOpen, toggle, children, onAction, title, ...props }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true} {...props}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <BaseButton onClick={onAction}>
          Save
        </BaseButton>
        <BaseButton color="secondary" onClick={toggle}>
          Cancel
        </BaseButton>
      </ModalFooter>
    </Modal>
  );
}