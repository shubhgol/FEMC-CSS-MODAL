import React from "react";

const Modal = ({ modalRef, children, isOpen, onCloseHandler }) => {
  if (!isOpen) return null;
  return (
    <div className="modalWrapper">
      <div className="modal" ref={modalRef}>
        <span className="closeIcon" onClick={onCloseHandler}></span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
