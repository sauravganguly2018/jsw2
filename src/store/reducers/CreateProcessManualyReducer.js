import { SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_ERROR } from '../Actions/CreateProcessManualyAction';

const initialState = {
    params: {},
    success: false,
    error: null,
    isLoggedIn: false,
    data: null
  };
  
  const CreateProcessManualyReducer = (state = initialState, action) => {
    switch (action.type) {
      case SUBMIT_FORM:
        return {
          ...state,
          success: false,
          error: false,
          isLoggedIn: true,
          data: action.payload
        };
      case SUBMIT_FORM_SUCCESS:
        return {
          ...state,
          success: true,
          error: false,
          isLoggedIn: false,
          data: action.payload
        };
      case SUBMIT_FORM_ERROR:
        return {
          ...state,
          success: false,
          error: true,
          isLoggedIn: false,
          data: action.payload
        };
      default:
        return state;
    }
  };
  
  export default CreateProcessManualyReducer;