const baseURL = process.env.REACT_APP_BASE_URL;

export const setOtp = (otp) => ({
  type: "SET_OTP_MOBILE",
  payload: otp,
});

export const setStatusOtp = (status) => ({
  type: "SET_STATUS_MOBILE_OTP",
  payload: status,
});

export const verifyOtp = (phone, otp) => async (dispatch) => {
  const response = await fetch(`${baseURL}partner/verifyPhoneOtp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone, otp }),
  });

  const statusCode = response.status;
  // console.log(data);
  console.log(statusCode)
  if (statusCode === 401) {
    dispatch(setStatusOtp('incorrectotp'));
  } else if (statusCode === 200) {
    dispatch(setStatusOtp('correctotpPhone'));
  } else {
    dispatch(setStatusOtp('maxattempts'));
  }

  // dispatch(setStatusOtp('incorrectotpPhone'));
  // dispatch(setStatusOtp('maxattempsPhone'));
  // dispatch(setStatusOtp('correctotpPhone'));
};


export const startTimer = (durationInSeconds) => ({
  type: "START_TIMER_MOBILE",
  payload: durationInSeconds,
});

export const updateTimer = () => ({
  type: "UPDATE_TIMER_MOBILE",
});

export const resetTimer = () => ({
  type: "RESET_TIMER_MOBILE",
});