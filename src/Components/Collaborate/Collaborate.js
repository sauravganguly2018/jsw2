import React from "react";
import { useState } from "react";
import "./Collaborate.scss";
// import collaborators from "../../assets/images/collaborators.svg";
import collaborate from "../../assets/images/collaborate.svg";

const Collaborate = () => {
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
    <div className="collaborate">
      <div className="collaborate__inner">
      <div className="collaborate__inner__content">
          <div className="collaborate__inner__content__small">
            <p>Collaborate with us!</p>
            <p>
              Hop on to facilitate the entrepreneurial journey of 2 lakh women
              in India
            </p>
            <div className="collaborate__button">
              <button
                className={`collaborate__button__register ${
                  activeButton === 0 || hoveredButton === 0
                    ? "active__collaborate"
                    : "inactive__collaborate"
                }`}
                onClick={() => handleClick(0)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
              >
                Register
              </button>
              <button
                className={`collaborate__button__learnMore ${
                  activeButton === 1 || hoveredButton === 1
                    ? "active__collaborate"
                    : "inactive__collaborate"
                }`}
                onClick={() => handleClick(1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="collaborate__inner__image">
          <img src={collaborate} alt="collaborate image"></img>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
