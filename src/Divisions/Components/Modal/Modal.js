import React from "react";
import "./modal.css";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">

          <button
            onClick={() => {
              props.setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;