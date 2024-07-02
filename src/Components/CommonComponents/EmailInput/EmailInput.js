import React from "react";
import "./EmailInput.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import error_light from "../../../assets/images/error_light.svg";
import error_bold from "../../../assets/images/error_bold.svg";
import valid_bold from "../../../assets/images/valid_bold.svg";
import { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setStatus, checkEmailStatus } from "../../../store/action/emailActions";
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;

const EmailInput = () => {
  const dispatch = useDispatch();
  const { email, status } = useSelector((state) => state.email);

  const handleChange = (e) => {
    const emailValue = e.target.value;
    dispatch(setEmail(emailValue));
  };

  const handleFocus = () => {
    dispatch(setStatus("checking"));
  };

  const onClickEditEmail = () => {
    dispatch(setStatus("checking"));
  }

  const handleBlur = () => {
    if (email != '') {
      if (emailRegex.test(email)) {
        dispatch(setStatus("checking"));
        // Simulate API call to check if email exists
        setTimeout(() => {
          // dispatch(setStatus("valid"));
          dispatch(checkEmailStatus(email)); // Replace with actual API call
        }, 1000);
      } else {
        dispatch(setStatus("invalid"));
      }
    } else {
      dispatch(setStatus("blank"));
    }

  };

  return (
    <div className="email">
      <input
        type="email"
        className={`email__input ${status === "checking" ? "checking" :
          status === "valid" ? "valid" :
          status === "invalid" ? "invalid" :
          status === "emailOtpSent" ? "otpsent" :
          status === "existing" ? "existing" :
          status === "blank" ? "blank" :
          status === "maxattempts" ? "maxattempts":
          status === "openOtpemail" ? "openotpemail":
          status === "incorrectotp" ? "incorrectotp" : ""}`}
        placeholder="Enter your email address"
        value={email}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {status === "checking" && <Spin
        className="email__spinner"
        indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />}
      />}
      {(status === "valid" || status === "otpSent") && <div className="email__valid_bold">
        <img src={valid_bold} alt="valid bold logo" />
      </div>}
      {status === "invalid" && <div className="email__error_bold">
        <img src={error_bold} alt="error bold logo" />
      </div>}
      <div className="email__subtitle">
        {status === "checking" && <div className="email__subtitle__checking">Checking...</div>}
        {status === "invalid" && <div className="email__subtitle__invalidEmail">
          <img src={error_light} alt="error light logo" />
          Please enter a valid email address
        </div>}

        {/* Samim */}
        {status === "blank" && <div className="email__subtitle__invalidEmail">
          <img src={error_light} alt="error light logo" />
          Please enter email address
        </div>}


        {status === "existing" && <div className="email__subtitle__emailExist">
          Email Id already exists. Please login
        </div>}
        {status === "valid" && <div className="email__subtitle__validEmail">
          The email address is valid
        </div>}
        {(status === "emailOtpSent" || status === "incorrectotp" || status === "maxattempts" || status == "openOtpemail")  && <div className="email__subtitle__emailEdit">
          Entered the wrong email address?<span className="clickable" onClick={onClickEditEmail}>Edit</span>
        </div>}
      </div>
    </div>
  );
};

export default EmailInput;
