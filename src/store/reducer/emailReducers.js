const initialState = {
  email: '',
  status: '', // checking, invalid, existing, valid, edit
};

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default emailReducer;
