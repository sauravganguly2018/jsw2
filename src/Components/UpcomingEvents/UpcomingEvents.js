import React, { useState } from "react";
import "./UpcomingEvents.scss";
import ruler from "../../assets/images/small_lining.svg";
import card1 from "../../assets/images/upcoming1.svg";
import card2 from "../../assets/images/upcoming2.svg";
import Modal from "../CommonComponents/Modal/Modal";
import Calendar from "../CommonComponents/MyCalendarComponent/MyCalendarComponent";

const UpcomingEvents = () => {
  const [showModal, setShowModal] = useState(null);

  const eventData = [
    {
      id: 1,
      image: card1,
      date: "15/04/2024 | 2:00pm IST | Online",
      title: "Better business with Veena Paralikar1",
      content:
        "Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: 2,
      image: card2,
      date: "15/04/2024 | 2:00pm IST | Online",
      title: "Better business with Veena Paralikar2",
      content:
        "Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur. Odio risus turpis diam. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const handleOpenModal = (eventId) => {
    setShowModal(eventId);
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  return (
    <div className="upcomingEvents">
      <div className="outer2">
        <div className="heading2">
          <div className="heading2__left">
            <p>Upcoming events</p>
            <img src={ruler} alt="Ruler" />
          </div>
          <div className="heading2__right">
            <a href="#">View all events</a>
          </div>
        </div>
        <div className="outer3">
          <div className="calendar">
            <Calendar />
          </div>
          <div className="cards">
            {eventData.map((event) => (
              <div key={event.id} className={`card card${event.id}`}>
                <div
                  className="card__image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="cardContent">
                  <div className="cardSubtitle">{event.date}</div>
                  <div className="cardHeading">{event.title}</div>
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
                    <p>{event.content.substring(0, 60) + "..."}</p>
                  </div>
                  <a
                    href="#"
                    className="learnMore"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenModal(event.id);
                    }}
                  >
                    Learn more
                  </a>
                </div>
                <Modal
                  show={showModal === event.id}
                  onClose={handleCloseModal}
                  image={event.image}
                  date={event.date}
                  title={event.title}
                  content={event.content}
                />
              </div>
            ))}
            <div className="pagination">
              <div className="inactive__pagination"></div>
              <div className="active__pagination"></div>
              <div className="inactive__pagination"></div>
              <div className="inactive__pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
