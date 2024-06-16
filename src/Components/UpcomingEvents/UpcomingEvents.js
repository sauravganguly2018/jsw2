import React, { useState } from "react";
import "./UpcomingEvents.scss";
import ruler from "../../assets/images/small_lining.svg";
import card1 from "../../assets/images/upcoming1.svg";
import card2 from "../../assets/images/upcoming2.svg";
import Card from "../CommonComponents/Card/Card";
import Calendar from "../CommonComponents/MyCalendarComponent/MyCalendarComponent";

const UpcomingEvents = () => {

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
              <Card id={event.id} image={event.image} date={event.date} title={event.title} content={event.content}/>
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
