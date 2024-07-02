import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./reducer/emailReducers";
import otpReducer from "./reducer/otpReducer";
import phoneNumberReducer from "./reducer/phoneNumberReducers";
import otpMobileReducer from "./reducer/otpMobileReducer";

const store = configureStore({
  reducer: {
    // add reducers here
    email:emailReducer,
    otp: otpReducer,
    phone: phoneNumberReducer,
    otpPhone: otpMobileReducer
  },
});

export default store;
