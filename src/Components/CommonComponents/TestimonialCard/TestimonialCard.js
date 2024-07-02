import React from "react";
import "./TestimonialCard.scss";

const TestimonialCard = (props) => {
  return (
    <div className="item content2">
      <div className="outerText">
        <div className="innerText1">
          <p>{props.content}</p>
        </div>
        <div className="innerText2">
          <div></div>
          <p>{props.name}</p>
          <p>{props.age}</p>
          <p>{props.profession}</p>
        </div>
        <div className="innerText3">
          <button className="innerText3_button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
