import React from "react";
import "./Discover.scss";
import smallLining from "../../assets/images/small_lining.svg";
import enterpreneurship from "../../assets/images/enterpreneurship.svg";
// import capacity_building from "../../assets/images/capacity_building.svg";
import capacity_building2 from "../../assets/images/capacity_building2.svg";
import business_tools from "../../assets/images/business_tools.svg";
// import mentorship from "../../assets/images/mentorship.svg";
import mentorship2 from "../../assets/images/mentorship2.svg";
// import market_access from "../../assets/images/market_access.svg";
import access from "../../assets/images/access.svg";
// import financial_linkage from "../../assets/images/financial_linkage.svg";
import financial_linkage2 from "../../assets/images/financial_linkage2.svg";
import technology from "../../assets/images/technology.svg";

const Discover = () => {
  return (
    <div className="discover">
      <div className="discover__inner">
        <div className="discover__heading">
          <div className="discover__heading__inner">
            <p className="discover__heading__inner__text">Discover</p>
            <img src={smallLining} alt="small lining image"></img>
          </div>
        </div>
        <div className="discover__cards">
          <div className="discover__card">
            <img src={capacity_building2} alt="capacity building image"></img>
            <p>Capacity Building and Skill development</p>
          </div>
          <div className="discover__card">
            <img src={mentorship2} alt="mentorship image"></img>
            <p>Mentorship and Networking</p>
          </div>
          <div className="discover__card">
            <img src={access} alt="access image"></img>
            <p>Access to Markets</p>
          </div>
          <div className="discover__card">
            <img src={technology} alt="technology image"></img>
            <p>Technology and Information Access</p>
          </div>
          <div className="discover__card">
            <img src={business_tools} alt="business tools image"></img>
            <p>Business Tools</p>
          </div>
          <div className="discover__card">
            <img src={financial_linkage2} alt="Financial Linkage image"></img>
            <p>Financial Linkages and Schemes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
