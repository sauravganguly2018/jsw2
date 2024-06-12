import React from "react";
import "./Partners.scss";
import small_lining from "../../assets/images/small_lining.svg";
import samhita from "../../assets/images/samhita.svg";
import frontier from "../../assets/images/frontier.svg";
import tri from "../../assets/images/tri.svg";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners__inner">
        <div className="partners__inner__first">
          <div className="partners__inner__first__div">
            <p>Our Partners</p>
            <img src={small_lining} alt="lining image"></img>
          </div>
        </div>
        <div className="partners__inner__second">
          <div className="partners__inner__second__image">
            <img src={samhita} alt=""></img>
          </div>
          <div className="partners__inner__second__image">
            <img src={frontier} alt=""></img>
          </div>
          <div className="partners__inner__second__image">
            <img src={tri} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
