const baseURL = process.env.REACT_APP_BASE_URL;

export const setOtp = (otp) => ({
  type: "SET_OTP",
  payload: otp,
});

export const setStatusOtp = (status) => ({
  type: "SET_STATUS_EMAIL_OTP",
  payload: status,
});

export const verifyOtp = (title, email, otp) => async (dispatch) => {
  const response = await fetch(`${baseURL}partner/verifyemailotp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, otp }),
  });

  const statusCode = response.status;
  // console.log(data);
  console.log(statusCode)
  if (statusCode === 401) {
    dispatch(setStatusOtp('incorrectotp'));
  } else if (statusCode === 200) {
    dispatch(setStatusOtp('correctotp'));
  } else {
    dispatch(setStatusOtp('maxattempts'));
  }
};


export const startTimer = (durationInSeconds) => ({
  type: "START_TIMER",
  payload: durationInSeconds,
});

export const updateTimer = () => ({
  type: "UPDATE_TIMER",
});

export const resetTimer = () => ({
  type: "RESET_TIMER",
});