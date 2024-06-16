import React from "react";
import { useState } from "react";
import "./Joining.scss";
// import woman from "../../assets/images/woman.svg";
import joining from "../../assets/images/joining.svg";
import lining from "../../assets/images/lining.svg";

const Joining = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  const handleMouseEnter = (index) => {
    if (activeButton !== index) {
      setHoveredButton(index);
    }
  };

  const handleMouseLeave = (index) => {
    if (hoveredButton === index) {
      setHoveredButton(null);
    }
  };

  return (
    <div className="joining">
      <div className="joining__inner">
        <div className="joining__inner__content">
          <div className="joining__inner__content__image">
            <img src={joining} alt="joining image"></img>
          </div>
          <div className="joining__inner__content__heading">
            <p>Join our family of</p>
            <p>10,121</p>
            <p>women entrepreneurs!</p>
            <div className="joining__inner__content__buttons">
              <button
                className={`joining__register ${
                  activeButton === 0 || hoveredButton === 0
                    ? "active__joining"
                    : "inactive__joining"
                }`}
                onClick={() => handleClick(0)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                Register
              </button>

              <button
                className={`joining__login ${
                  activeButton === 1 || hoveredButton === 1
                    ? "active__joining"
                    : "inactive__joining"
                }`}
                onClick={() => handleClick(1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                Login
              </button>
            </div>
          </div>
          <div className="joining__lining">
            <img src={lining} alt="lining image"></img>
          </div>
        </div>
        <div className="joining__inner__data">
          <div className="joining__inner__data__value">
            <p>9+</p>
            <p>Partners</p>
          </div>
          <div className="joining__inner__data__value">
            <p>150+</p>
            <p>Mentors</p>
          </div>
          <div className="joining__inner__data__value">
            <p>200+</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joining;
