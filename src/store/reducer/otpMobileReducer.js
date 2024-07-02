const initialState = {
    otp: '',
    status: '', // checking, invalid, existing, valid, edit
    durationInSeconds: 0,
    timerRunning: false,
};

const otpMobileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_OTP_PHONE":
            return {
                ...state,
                email: action.payload,
            };
        case "SET_STATUS_MOBILE_OTP":
            return {
                ...state,
                status: action.payload,
            };
        case "START_TIMER_MOBILE":
            return {
                ...state,
                durationInSeconds: action.payload,
                timerRunning: true,
            };
        case "UPDATE_TIMER_MOBILE":
            return {
                ...state,
                durationInSeconds: state.durationInSeconds - 1,
            };
        case "RESET_TIMER_MOBILE":
            return {
                ...state,
                durationInSeconds: 0,
                timerRunning: false,
            };
        default:
            return state;
    }
};

export default otpMobileReducer;
