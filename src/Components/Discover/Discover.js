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
import DiscoverCard from "../CommonComponents/DiscoverCard/DiscoverCard";

const Discover = () => {
  const discoversData = [
    {
      src: capacity_building2,
      altImage: "capacity building image",
      content: "Capacity Building and Skill development",
    },
    {
      src: mentorship2,
      altImage: "mentorship image",
      content: "Mentorship and Networking",
    },
    {
      src: access,
      altImage: "access image",
      content: "Access to Markets",
    },
    {
      src: technology,
      altImage: "technology image",
      content: "Technology and Information Access",
    },
    {
      src: business_tools,
      altImage: "business tools image",
      content: "Business Tools",
    },
    {
      src: financial_linkage2,
      altImage: "Financial Linkage image",
      content: "Financial Linkages and Schemes",
    },
  ];
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
          {discoversData.map((data) => (
            <DiscoverCard
              src={data.src}
              altImage={data.altImage}
              content={data.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
