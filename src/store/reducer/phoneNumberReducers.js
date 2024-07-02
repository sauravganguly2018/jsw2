const initialState = {
    phoneNumber: '',
    status: '',
};

const phoneNumberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PHONE_NUMBER':
            return {
                ...state,
                phoneNumber: action.payload,
            };

        // case "SET_PHONE_NUMBER_ERROR":
        //     return {
        //       ...state,
        //       error: action.payload,
        //     };


        case "SET_PHONE":
            return {
                ...state,
                phone: action.payload,
            };
        case "SET_STATUS_MOBILE":
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};

export default phoneNumberReducer;