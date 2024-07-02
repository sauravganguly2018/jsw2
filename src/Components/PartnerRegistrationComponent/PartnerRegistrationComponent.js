import React from "react";
import "./PartnerRegistrationComponent.scss";
import jsw_vaani_logo from "../../assets/images/jsw_vaani_logo.svg";
import EmailInput from "../CommonComponents/EmailInput/EmailInput";
import OTPVerification from "../CommonComponents/OTPVerification/OTPVerification";
import RegisteredSuccessfully from "../CommonComponents/RegisteredSuccessfully/RegisteredSuccessfully";
import RegisteredEM from "../CommonComponents/RegisteredEM/RegisteredEM";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setStatus, sendOTP, verifyemail, checkEmailStatus } from "../../store/action/emailActions";
import MobileInput from "../CommonComponents/MobileInput/MobileInput";
import { setPhone } from "../../store/action/phoneNumberAction";
import OTPVerificationPhone from "../CommonComponents/OTPVerificationPhone/OTPVerificationPhone";
import arrow_left from "../../assets/images/arrow_left.svg";
import {Link} from "react-router-dom";

const PartnerRegistrationComponent = () => {
  const dispatch = useDispatch();
  const { email, status } = useSelector((state) => state.email);
  const emailotpstatus = useSelector((state) => state.otp.emailotpstatus);
  const  phone  = useSelector((state) => state.phone.phoneNumber);
  const phoneState = useSelector((state) => state.phone.status);
  const phoneStateOtp = useSelector((state) => state.otpPhone.status);
  // console.log('phoneStateOtp: ', phoneStateOtp)
  // console.log('phone: ',phone)

  const onsendOtpEmail = () => {
    // dispatch(verifyemail(email))
    // dispatch(checkEmailStatus(email));
    dispatch(setStatus("emailOtpSent"))
  }

  const onsendOtpPhone = () => {
    dispatch(setPhone(phone));
  }

  // onsendOtpPhone = () => {
  //   dispatch(checkEmailStatus(email));
  // }

  // const onVerify = () => {
  //   dispatch(verifyemail(email))
  // }

  return (
    <div className="partnerRegistration">
      <Link to ="/"><div className="partnerRegistration__returnHome"><img src={arrow_left} alt="arrow logo"/>Return to home</div></Link>
      <div className="partnerRegistration__inner">
        <div className="partnerRegistration__inner__image">
          <img src={jsw_vaani_logo} alt="jswvaani logo" />
        </div>
        <div className="partnerRegistration__inner__text">
          <p>Registration as a partner</p>
        </div>
        <div className="partnerRegistration__inner__alreadyRegistered">
          <p>Already Registered? <Link to="">Login</Link></p>
        </div>
        {/* email */}
        <>
        {console.log(emailotpstatus)}
          {emailotpstatus !== "correctotp" && <div className="partnerRegistration__inner__email">
            <EmailInput />
          </div>}

          {(status !== "emailOtpSent") && <div className="partnerRegistration__inner__sendOtp">
            <button onClick={onsendOtpEmail}
              className={`partnerRegistration__inner__sendOtp__button ${status !== "valid" ? "disabled" : "enabled"
                }`}
            >
              <span>Send OTP to verify</span>
            </button>
          </div>}

          {status === "existing" && (
            <div className="partnerRegistration__inner__emailExist">
              This email is already registered.
            </div>
          )}
          {(status === "existing") && (
            <div className="partnerRegistration__inner__login">
              <button
                className={`partnerRegistration__inner__login__button enabled`}
              >
                <span>Go to login</span>
              </button>
            </div>
          )}
          {/* email OTP */}
          {status ==="emailOtpSent" && emailotpstatus !== "correctotp" && <OTPVerification />}
        </>

        {/* Mobile */}
        {(emailotpstatus === "correctotp" && phoneStateOtp !== "correctotpPhone") &&
          <>
            {(emailotpstatus === "correctotp") && <RegisteredEM value={email} />}
            {/* {(phoneStateOtp === "correctotpPhone") && <RegisteredEM value={phone} />} */}
            
            <div className="partnerRegistration__inner__email"> <MobileInput /></div>

            {(phoneState === "existPhone") && (
              <div className="partnerRegistration__inner__login">
                <button
                  className={`partnerRegistration__inner__login__button enabled`}
                >
                  <span>Go to login</span>
                </button>
              </div>
            )}


            {(phoneState !== "existPhone" && phoneState !== "mobileOtpSent") && <div className="partnerRegistration__inner__sendOtp">
              <button onClick={onsendOtpPhone}
                className={`partnerRegistration__inner__sendOtp__button ${phoneState !== "validPhone" ? "disabled" : "enabled"
                  }`}
              >
                <span>Verify</span>
              </button>
            </div>}
            {(phoneState === "mobileOtpSent" || phoneStateOtp === "incorrectotp" || phoneStateOtp === "maxattempts") && <OTPVerificationPhone />}
            {/* {(phoneState === "otpSentPhone" || status === "incorrectotp" || status === "maxattemps" && status !== "otpSent") && <OTPVerification title="phone number"/>} */}
          </>}

        {/* { phoneStateOtp === "correctotpPhone" <>
          <RegisteredEM value={email} />
          <RegisteredEM value={phone} />
          <RegisteredSuccessfully />
        </>} */}

        {phoneStateOtp === "correctotpPhone" && <RegisteredEM value={email} />}
        {phoneStateOtp === "correctotpPhone" && <RegisteredEM value={'+91'+phone} />}
        {phoneStateOtp === "correctotpPhone" && <RegisteredSuccessfully />}
      </div>
    </div>


  );
};

export default PartnerRegistrationComponent;



// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./PartnerRegistrationComponent.scss";
// import jswVaaniLogo from "../../assets/images/jsw_vaani_logo.svg";
// import EmailInput from "../CommonComponents/EmailInput/EmailInput";
// import OTPVerification from "../CommonComponents/OTPVerification/OTPVerification";
// import RegisteredSuccessfully from "../CommonComponents/RegisteredSuccessfully/RegisteredSuccessfully";
// import RegisteredEM from "../CommonComponents/RegisteredEM/RegisteredEM";
// import MobileInput from "../CommonComponents/MobileInput/MobileInput";
// import OTPVerificationPhone from "../CommonComponents/OTPVerificationPhone/OTPVerificationPhone";
// import { setEmail, setStatus, sendOTP, verifyemail, checkEmailStatus } from "../../store/action/emailActions";
// import { setPhone } from "../../store/action/phoneNumberAction";
// import { setStatusOtp } from "../../store/action/otpMobileAction";

// const PartnerRegistrationComponent = () => {
//   const dispatch = useDispatch();
//   const { email, status } = useSelector((state) => state.email);
//   const { phoneNumber: phone, status: phoneState } = useSelector((state) => state.phone);
//   const phoneStateOtp = useSelector((state) => state.otpPhone.status);

//   const onsendOtpEmail = () => {
//     dispatch(setStatus("openOtpemail"));
//   };

//   const onsendOtpPhone = () => {
//     dispatch(setPhone(phone));
//     // dispatch(setStatusOtp('otpSentPhone'));
//   };

//   return (
//     <div className="partnerRegistration">
//       <div className="partnerRegistration__inner">
//         <div className="partnerRegistration__inner__image">
//           <img src={jswVaaniLogo} alt="jswvaani logo" />
//         </div>
//         <div className="partnerRegistration__inner__text">
//           <p>Registration as a partner</p>
//         </div>

//         {/* Email Section */}
//         {status !== "correctotp" && status !== "incorrectotpPhone" && status !== "correctotpPhone" && status !== "maxattempsPhone" && (
//           <div className="partnerRegistration__inner__email">
//             <EmailInput />
//           </div>
//         )}

//         {(status !== "openOtpemail" || status !== "correctotp") && (status === 'valid' || status === "checking") && (
//           <div className="partnerRegistration__inner__sendOtp">
//             <button
//               onClick={onsendOtpEmail}
//               className={`partnerRegistration__inner__sendOtp__button ${status !== "valid" ? "disabled" : "enabled"}`}
//             >
//               <span>Verify</span>
//             </button>
//           </div>
//         )}

//         {status === "existing" && (
//           <>
//             <div className="partnerRegistration__inner__emailExist">
//               This email is already registered.
//             </div>
//             <div className="partnerRegistration__inner__login">
//               <button className="partnerRegistration__inner__login__button enabled">
//                 <span>Go to login</span>
//               </button>
//             </div>
//           </>
//         )}

//         {(status === "openOtpemail" || status === "incorrectotp" || status === "maxattemps") && phoneState !== "otpSentPhone" && (
//           <OTPVerification />
//         )}

//         {/* Mobile Section */}
//         {(status === "correctotp" || status === "incorrectotpPhone" || status === "maxattempsPhone") && (
//           <>
//             {(status === "correctotp" || phoneStateOtp === "correctotpPhone") && (
//               <RegisteredEM value={email} />
//             )}
//             {phoneStateOtp === "correctotpPhone" && (
//               <RegisteredEM value={phone} />
//             )}
//             <div className="partnerRegistration__inner__email">
//               <MobileInput />
//             </div>
//             {phoneState === "existPhone" && (
//               <div className="partnerRegistration__inner__login">
//                 <button className="partnerRegistration__inner__login__button enabled">
//                   <span>Go to login</span>
//                 </button>
//               </div>
//             )}
//             {phoneState !== "existPhone" && phoneState !== "otpSentPhone" && (
//               <div className="partnerRegistration__inner__sendOtp">
//                 <button
//                   onClick={onsendOtpPhone}
//                   className={`partnerRegistration__inner__sendOtp__button ${phoneState !== "validPhone" ? "disabled" : "enabled"}`}
//                 >
//                   <span>Verify</span>
//                 </button>
//               </div>
//             )}
//             {(phoneState === "otpSentPhone" || phoneStateOtp === "incorrectotpPhone" || phoneStateOtp === "maxattempsPhone") && (
//               <OTPVerificationPhone />
//             )}
//           </>
//         )}

//         {/* Registered Successfully Section */}
//         {phoneStateOtp === "correctotpPhone" && (
//           <>
//             <RegisteredEM value={email} />
//             <RegisteredEM value={`+91${phone}`} />
//             <RegisteredSuccessfully />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PartnerRegistrationComponent;

