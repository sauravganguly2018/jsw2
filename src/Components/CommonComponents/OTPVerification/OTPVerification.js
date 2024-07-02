import React, { useRef, useEffect, useState } from "react";
import "./OTPVerification.scss";
import error_bold from "../../../assets/images/error_bold.svg";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Progress } from "antd";
import {
  resetTimer,
  setStatus,
  startTimer,
  updateTimer,
  verifyOtp,
} from "../../../store/action/otpActions";
import { checkEmailStatus } from "../../../store/action/emailActions";

const OtpVerification__inner = ({ title }) => {
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  // const [disabled, setDisabled] = useState(true);

  const spanRef = useRef(null);
  const [spanWidth, setSpanWidth] = useState(0);

  // Redux state selectors
  const { otp, emailotpstatus, durationInSeconds, timerRunning } = useSelector(
    (state) => state.otp
  );
  const { email } = useSelector((state) => state.email);

  // Local state for OTP input
  const [otpInput, setOtpInput] = useState(Array(6).fill(""));

  // Effect to set up refs for each input field
  useEffect(() => {
    inputRefs.current = inputRefs.current
      .slice(0, 6)
      .map((_, i) => inputRefs.current[i] || React.createRef());
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtpInput = [...otpInput];
      newOtpInput[index] = value;
      setOtpInput(newOtpInput);

      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key to delete OTP digits
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && index > 0 && !otpInput[index]) {
      const newOtpInput = [...otpInput];
      newOtpInput[index - 1] = "";
      setOtpInput(newOtpInput);
      inputRefs.current[index - 1].focus();
    }

    // if (otpInput.join("").length <= 6) {
    //   setDisabled(false)
    // } else {
    //   setDisabled(true)
    // }
  };

  // Format time in MM:SS
  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  // };

  const calculatePercentage = (currentSeconds, totalSeconds=90) => {
    // console.log(currentSeconds);
    const percentage = ((totalSeconds - currentSeconds) / totalSeconds) * 100;
    if(Math.round(percentage)===100){
      resetTimer();
    }
    return Math.round(percentage); // Round to the nearest integer
  };

  // Resend OTP functionality
  const resendOtp = () => {
    if (!timerRunning) {
      dispatch(checkEmailStatus(email));
    }
  };

  // Handle OTP verification on button click
  const onVerifyOtp = () => {
    dispatch(verifyOtp(title, email, otpInput.join("")));
  };

  // Effect to manage timer updates and expiration
  useEffect(() => {
    if (spanRef.current) {
      setSpanWidth(spanRef.current.offsetWidth);
    }

    if (timerRunning && durationInSeconds > 0) {
      const timerInterval = setInterval(() => {
        dispatch(updateTimer());
      }, 1000);

      return () => clearInterval(timerInterval);
    } else if (durationInSeconds === 0) {
      dispatch(resetTimer());
    }
  }, [dispatch, durationInSeconds, timerRunning]);

  const getStrokeColor = (percent) => {
    return percent === 100 ? '#1751A4' : '#1751A4'; // Red for 100%, green otherwise
  };

  return (
    <div className="otpVerification">
      <div className="otpVerification__inner">
        <div className="otpVerification__inner__heading">
          OTP sent successfully to your email address!
        </div>
        <div className="otpVerification__inner__input">
          <div className="otpVerification__inner__input__text">
            Please enter the OTP below
          </div>
          <div className="otpVerification__inner__input__boxes">
            <div className="otpVerification__inner__input__boxes__inner">
              {otpInput.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  pattern="\d*"
                  className="otpVerification__inner__input__box"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </div>
          <div className="otpVerification__inner__input__resend">
            <span ref={spanRef} className={timerRunning===true ? "disabled":"enabled"} onClick={resendOtp}>Resend OTP</span>{" "}
            <Progress className="otpVerification__inner__input__resend__progress" strokeColor="#1751A4" percent={calculatePercentage(durationInSeconds)} size={[spanWidth,2]} showInfo={false} />
            {/* {timerRunning && <> in {formatTime(durationInSeconds)}</>} */}
          </div>
        </div>
       {emailotpstatus==="incorrectotp" && <div className="otpVerification__inner__subtitle">
          <div className="otpVerification__inner__subtitle__logo">
            <img src={error_bold} alt="error bold logo" />
          </div>
          <div className="otpVerification__inner__subtitle__text">
            <p>Incorrect OTP.</p>
            <p><span>You have 5 attemps left</span></p>
          </div>
        </div>}
        <div className="otpVerification__inner__continue">
          {emailotpstatus !== "maxattempts" && (
            <button
              // ${disabled ? "disabled" : "enabled"}
              className={`otpVerification__inner__continue__button disabled`}
              onClick={onVerifyOtp}
            >
              <span>Continue</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification__inner;
