import React from "react";
import "./Modal.scss";
import { IoIosClose } from "react-icons/io";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className="modalOverlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="closeButton" onClick={props.onClose}>
          <IoIosClose style={{ width: "40px", height: "40px" }} />
        </button>
        <div
          className="modalImage"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="modalTitle">
          {" "}
          <div className="modalcardSubtitle">{props.date}</div>
          <div className="modalcardHeading">{props.title}</div>
        </div>
        <div className="modalContent">
          <div className="cardContent" style={{ height: "100%" }}>
            <div className="modalcardText">
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
