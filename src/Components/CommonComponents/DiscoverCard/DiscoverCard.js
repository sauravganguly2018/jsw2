import React from "react";
import "./DiscoverCard.scss";

const DiscoverCard = (props) => {
  return (
    <div className="discover__card">
      <img src={props.src} alt={props.altImage}></img>
      <span>{props.content}</span>
    </div>
  );
};

export default DiscoverCard;
