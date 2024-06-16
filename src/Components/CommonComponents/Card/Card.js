import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Card.scss";

const Card = (props) => {
  const [showModal, setShowModal] = useState(null);
  const handleOpenModal = (eventId) => {
    setShowModal(eventId);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div className={`card card${props.id}`}>
      <div
        className="card__image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="cardContent">
        <div className="cardSubtitle">{props.date}</div>
        <div className="cardHeading">{props.title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="20"
          viewBox="0 0 283 13"
          fill="none"
        >
          <path
            d="M0.00453479 0.000247036C-0.183068 -0.0426005 5.50524 5.50095 6.83699 6.8327C8.16874 8.16445 10.1212 9.03298 13.6903 9.03298L274.493 9.03298C279.704 9.03298 282.18 12.1168 282.252 12.0439C282.324 11.9709 276.925 6.60109 275.651 5.32724C274.377 4.0534 272.019 3.01116 269.724 3.01116L7.1844 3.01116C2.78384 3.01116 0.193296 0.0442527 0.00453479 0.000247036Z"
            fill="#2744A0"
          />
        </svg>
        <div className="cardText">
          <p>{props.content.substring(0, 60) + "..."}</p>
        </div>
        <a
          href="#"
          className="learnMore"
          onClick={(e) => {
            e.preventDefault();
            handleOpenModal(props.id);
          }}
        >
          Learn more
        </a>
      </div>
      <Modal
        show={showModal === props.id}
        onClose={handleCloseModal}
        image={props.image}
        date={props.date}
        title={props.title}
        content={props.content}
      />
    </div>
  );
};

export default Card;
