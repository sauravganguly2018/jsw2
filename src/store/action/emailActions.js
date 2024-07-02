import { startTimer } from "./otpActions";

const baseURL=process.env.REACT_APP_BASE_URL;
export const setEmail = (email) => ({
  type: "SET_EMAIL",
  payload: email,
});

export const setStatus = (status) => ({
  type: "SET_STATUS",
  payload: status,
});

export const checkEmailStatus = (email) => async (dispatch) => {
    const response = await fetch(`${baseURL}partner/checkEmailexist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const statusCode = response.status;
    // console.log(data);
    console.log(statusCode)
    if (statusCode===409) {
      dispatch(setStatus('existing'));
    } else {
      dispatch(setStatus('valid'));
      const duration = 90; // 5 minutes (300 seconds)
      dispatch(startTimer(duration));
    }
};

export const sendOTP = (status) => ({
  type: "SET_STATUS",
  payload: status,
});


export const verifyemail = (email) => async (dispatch) => {
  const response = await fetch(`${baseURL}partner/verifyemail`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const statusCode = response.status;
  // console.log(data);
  console.log(statusCode)
  if (statusCode===200) {
    dispatch(sendOTP('otpSent'));
  } else {
    dispatch(sendOTP('valid'));
  }
};
