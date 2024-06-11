import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
}

const Modal = ({ title, children, trigger, className = '' }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal}>{trigger}</div>
      <div className={`modal-overlay ${isOpen ? 'open' : ''} ${className}`} onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {title && <div className="modal-header">{title}</div>}
          <div className="modal-body">{children}</div>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
