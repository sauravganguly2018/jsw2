import React from "react";
import { useState } from "react";
import "./Landing.scss";
import message from "../../assets/images/message.svg";
import vaani from "../../assets/images/vaani.svg";
import vaani2 from "../../assets/images/vaani2.svg";
import vaani3 from "../../assets/images/vaani3.svg";
import lining from "../../assets/images/lining.svg";

const Landing = () => {
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [hoveredLanguage, setHoveredLanguage] = useState(null);

  const handleClick = (index) => {
    setActiveLanguage(index);
  };

  const handleMouseEnter = (index) => {
    if (activeLanguage !== index) {
      setHoveredLanguage(index);
    }
  };

  const handleMouseLeave = (index) => {
    if (hoveredLanguage === index) {
      setHoveredLanguage(null);
    }
  };

  let logo;
  if (activeLanguage === 1) {
    logo = <img src={vaani2} alt="vaani2 logo" />;
  } else if (activeLanguage === 3) {
    logo = <img src={vaani3} alt="vaani3 logo" />;
  } else {
    logo = <img src={vaani} alt="vaani logo" />;
  }

  return (
    <div className="landing">
      <div className="floating__message">
        <img src={message} alt="floating message logo"></img>
      </div>
      <div className="landing__vaani">{logo}</div>
      <div className="landing__languages">
        <div
          className={`landing__language ${
            activeLanguage === 0 || hoveredLanguage === 0
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          Welcome
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 1 || hoveredLanguage === 1
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          स्वागत है
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 2 || hoveredLanguage === 2
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          स्वागत आहे
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 3 || hoveredLanguage === 3
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          স্বাগতম
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 4 || hoveredLanguage === 4
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(4)}
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          வருக
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 5 || hoveredLanguage === 5
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(5)}
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={() => handleMouseLeave(5)}
        >
          స్వాగతం పలుకుతుంది
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 6 || hoveredLanguage === 6
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(6)}
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={() => handleMouseLeave(6)}
        >
          ಸ್ವಾಗತ
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 7 || hoveredLanguage === 7
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(7)}
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={() => handleMouseLeave(7)}
        >
          স্বাগতম জনাইছো
        </div>
        <div
          className={`landing__language ${
            activeLanguage === 8 || hoveredLanguage === 8
              ? "active"
              : "inactive"
          }`}
          onClick={() => handleClick(8)}
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={() => handleMouseLeave(8)}
        >
          સ્વાગત છે
        </div>
      </div>
      <div className="landing__lining">
        <img src={lining} alt="lining image"></img>
      </div>
    </div>
  );
};

export default Landing;
