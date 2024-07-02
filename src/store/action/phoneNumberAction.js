import { startTimer } from "./otpActions";
const baseURL=process.env.REACT_APP_BASE_URL;

export const updatePhoneNumber = (phoneNumber) => ({
    type: 'UPDATE_PHONE_NUMBER',
    payload: phoneNumber,
  });

//   export const setPhoneNoErr = (error) => ({
//     type: "SET_PHONE_NUMBER_ERROR",
//     payload: error,
//   });

//   export const setPhone = (phone) => ({
//     type: "SET_PHONE",
//     payload: phone,
//   });

  export const setPhone = (phone) => async (dispatch) => {
    const response = await fetch(`${baseURL}partner/checkPhoneexist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone }),
    });

    const statusCode = response.status;
    // console.log(data);
    console.log(statusCode)
    if (statusCode===409) {
      dispatch(setStatus('existPhone'));
    } else {
      dispatch(setStatus('mobileOtpSent'));
      const duration = 90; // 5 minutes (300 seconds)
      dispatch(startTimer(duration));
    }

    // dispatch(setStatus('otpSentPhone'));
    // const duration = 90; // 5 minutes (300 seconds)
    // dispatch(startTimer(duration));

};

export const checkPhoneStatus = (phone) => async (dispatch) => {
  const response = await fetch(`${baseURL}partner/checkPhoneexist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone }),
  });

  const statusCode = response.status;
  // console.log(data);
  console.log(statusCode)
  if (statusCode===409) {
    dispatch(setStatus('existPhone'));
  } else {
    dispatch(setStatus('validPhone'));
    const duration = 90; // 5 minutes (300 seconds)
    dispatch(startTimer(duration));
  }
};


  export const setStatus = (status) => ({
    type: "SET_STATUS_MOBILE",
    payload: status,
  });

