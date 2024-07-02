import React from "react";
import "./RegisteredEM.scss";
import valid_bold_white from "../../../assets/images/valid_bold_white.svg";

const RegisteredEM = ({value}) => {
  return (
    <div className="registeredEM">
      <div className="registeredEM__inner">
        <div className="registeredEM__inner__box">
            {value}
            <img src={valid_bold_white} alt="valid bold white logo"/>
        </div>
      </div>
    </div>
  );
};

export default RegisteredEM;
