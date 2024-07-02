const initialState = {
    otp: '',
    emailotpstatus: '', // checking, invalid, existing, valid, edit
    durationInSeconds: 0,
    timerRunning: false,
};

const otpReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_OTP":
            return {
                ...state,
                email: action.payload,
            };
        case "SET_STATUS_EMAIL_OTP":
            return {
                ...state,
                emailotpstatus: action.payload,
            };
        case "START_TIMER":
            return {
                ...state,
                durationInSeconds: action.payload,
                timerRunning: true,
            };
        case "UPDATE_TIMER":
            return {
                ...state,
                durationInSeconds: state.durationInSeconds - 1,
            };
        case "RESET_TIMER":
            return {
                ...state,
                durationInSeconds: 0,
                timerRunning: false,
            };
        default:
            return state;
    }
};

export default otpReducer;
