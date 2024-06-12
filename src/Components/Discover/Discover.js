import React from "react";
import "./Discover.scss";
import smallLining from "../../assets/images/small_lining.svg";
import enterpreneurship from "../../assets/images/enterpreneurship.svg";
import capacity_building from "../../assets/images/capacity_building.svg";
import business_tools from "../../assets/images/business_tools.svg";
import mentorship from "../../assets/images/mentorship.svg";
import market_access from "../../assets/images/market_access.svg";
import financial_linkage from "../../assets/images/financial_linkage.svg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover__inner">
        <div className="discover__heading">
          <p className="discover__heading__text">Discover</p>
          <img src={smallLining} alt="small lining image"></img>
        </div>
        <div className="discover__cards">
          <div className="discover__card">
            <img src={enterpreneurship} alt=""></img>
            <p>Enterpreneurship models</p>
          </div>
          <div className="discover__card">
            <img src={capacity_building} alt=""></img>
            <p>Capacity building</p>
          </div>
          <div className="discover__card">
            <img src={business_tools} alt=""></img>
            <p>Business tools</p>
          </div>
          <div className="discover__card">
            <img src={mentorship} alt=""></img>
            <p>Mentorship</p>
          </div>
          <div className="discover__card">
            <img src={market_access} alt=""></img>
            <p>Discover card</p>
          </div>
          <div className="discover__card">
            <img src={financial_linkage} alt=""></img>
            <p>Financial linkage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
