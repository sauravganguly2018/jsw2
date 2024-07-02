import React, { useState } from "react";
import "./MobileInput.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import error_light from "../../../assets/images/error_light.svg";
import error_bold from "../../../assets/images/error_bold.svg";
import valid_bold from "../../../assets/images/valid_bold.svg";
import { useDispatch, useSelector } from "react-redux";
import { checkPhoneStatus, setStatus, updatePhoneNumber } from "../../../store/action/phoneNumberAction";

export default function MobileInput() {
    // const dispatch = useDispatch();
    //   const { status } = useSelector((state) => state.phoneNumber);
    const [localPhnNo, setLocalPhnNo] = useState("");
    const { phoneNumber, status } = useSelector((state) => state.phone);
    console.log('state: ', status)
    const dispatch = useDispatch();

    const handleFocus = () => {
        dispatch(setStatus("checkingPhone"));
      };

    const handleBlur = (e) => {
        let input = e.target.value;
        if (phoneNumber != "") {
            dispatch(setStatus("checkingPhone"));
            setTimeout(() => {
                if (input === '0000000000') {
                    dispatch(setStatus('invalidPhone'));
                } else if (input.length < 10) {
                    dispatch(setStatus('invalidPhone'));
                } else {
                    // dispatch(setStatus('validPhone'));
                    dispatch(checkPhoneStatus(phoneNumber));
                }
                // if (input === "8617084773") {
                    // dispatch(setStatus('existPhone'));
                    
                // }
            }, 1000);
        } else {
            dispatch(setStatus("blankPhone"));
        }
    };

    const handlePhoneChange = (e) => {
        let input = e.target.value;

        // Remove any non-digit characters using regex
        input = input.replace(/\D/g, '');

        // Ensure input is no longer than 10 digits
        if (input.length > 10) {
            input = input.slice(0, 10);
        }

        setLocalPhnNo(input);

        // Update state with only digits (up to 10 digits)
        dispatch(updatePhoneNumber(localPhnNo));
    };

    const onClickEditPhone = () => {
        dispatch(setStatus("checkingPhone"));
      }

    return (
        
        <div className="mobile">
            {console.log(status)}
            <input
                type="tel"
                className={`mobile__input ${status === "checkingPhone" ? "checking" :
                    status === "validPhone" ? "valid" :
                    status === "invalidPhone" ? "invalid" :
                    status === "otpSentPhone" ? "otpsent" :
                    status === "existPhone" ? "existing" :
                    status === "blankPhone" ? "blank" :
                    status === "maxattempts" ? "maxattempts":
                    status === "incorrectotp" ? "incorrectotp" : ""}`}
                placeholder="Enter phone number"
                value={localPhnNo}
                onChange={handlePhoneChange}
                onFocus={handleFocus}
                maxLength={10}
                onBlur={handleBlur}
            />
            {status === "checkingPhone" && <Spin
                className="mobile__spinner"
                indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />}
            />}
            {status === 'validPhone' && <div className="mobile__valid_bold">
                <img src={valid_bold} alt="valid bold logo" />
            </div>}

            {status === 'invalidPhone' && <div className="mobile__error_bold">
                <img src={error_bold} alt="error bold logo" />
            </div>}

            {(status === 'checkingPhone' || status === 'invalidPhone' || status === 'validPhone' || status === "existPhone" || status === "otpSentPhone") && <div className="mobile__error_bold_91">
                +91
            </div>}

            <div className="email__subtitle">
                {status === 'checkingPhone' && <div className="mobile__subtitle__checking">Checking...</div>}
                {status === 'invalidPhone' && <div className="mobile__subtitle__invalidMobile">
                    <img src={error_light} alt="error light logo" />
                    Enter a valid phone number
                </div>}

                {/* Samim */}
                {status === 'blankPhone' && <div className="mobile__subtitle__invalidMobile">
                    <img src={error_light} alt="error light logo" />
                    Please enter phone number
                </div>}


                {status === "existPhone" && <div className="mobile__subtitle__mobileExist">
                    Phone Number already exists. Please login
                </div>}

                {status === 'validPhone' && <div className="mobile__subtitle__validMobile">
                    The phone number is valid
                </div>}

                {status === "mobileOtpSent" && <div className="mobile__subtitle__mobileEdit">
                    Entered the wrong phone number?<span className="clickable" onClick={onClickEditPhone}>Edit</span>
                </div>}
            </div>
        </div>
    )
}

