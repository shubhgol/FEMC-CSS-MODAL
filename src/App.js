import { useState, useRef } from "react";
import Modal from "./Modal";
import useOutSideHandler from "./useOutSideHandler";
import "./styles.css";

export default function App() {
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const [isShow, setIsShow] = useOutSideHandler(buttonRef, modalRef);
  // const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const popUpCloseHandler = () => setIsShow(false);

  return (
    <div className="App">
      <button ref={buttonRef}>Open Pop Up</button>
      <Modal
        modalRef={modalRef}
        isOpen={isShow}
        onCloseHandler={popUpCloseHandler}
      >
        <p>This is My Test Modal</p>
      </Modal>
    </div>
  );
}
