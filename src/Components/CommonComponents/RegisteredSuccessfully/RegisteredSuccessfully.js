import React from "react";
import "./RegisteredSuccessfully.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import registered from "../../../assets/images/registered.svg";

const RegisteredSuccessfully = () => {
  return (
    <div className="registeredSuccessfully">
      <div className="registeredSuccessfully__inner">
        <div className="registeredSuccessfully__inner__heading">
          Congratulations!<br></br>
          You have been successfully registered!
        </div>
        <div className="registeredSuccessfully__inner__image">
          <img src={registered} alt="registered image" />
        </div>
        <Spin
          className="registeredSuccessfully__inner__spinner"
          indicator={<LoadingOutlined style={{ fontSize: 30}} spin />}
        />
      </div>
    </div>
  );
};

export default RegisteredSuccessfully;
