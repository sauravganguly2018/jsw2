import {
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_ERROR,
  NEXT_BTN,
  INST_SUBMIT_FORM,
  INST_SUBMIT_FORM_SUCCESS,
  INST_SUBMIT_FORM_ERROR,

  CURRENT_INST_SUBMIT_FORM,
  CURRENT_INST_SUBMIT_FORM_SUCCESS,
  CURRENT_INST_SUBMIT_FORM_ERROR

} from '../Actions/registrationProgressAction';


const processesInitialState = {
  currentStep: 0,
  data: null,
  error: null,
  success: null,
  knolageInstent: null,
  currentInsteance: null,
}



export default function registrationProgressReducer(state = processesInitialState, action) {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        success: false,
        error: null,
        isLoggedIn: true,
        data: action.payload,
        isActiveBtn: false,
        isLoading: true
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        isLoggedIn: false,
        data: action.payload,
        isActiveBtn: true,
        isLoading: false
      };
    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
        isLoggedIn: false,
        data: action.payload,
        isActiveBtn: false,
        isLoading: false
      };



    case INST_SUBMIT_FORM:
      return {
        ...state,
        success: false,
        error: null,
        isLoggedIn: true,
        knolageInstent: action.payload,
        isLoading: true
      };
    case INST_SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        isLoggedIn: false,
        knolageInstent: action.payload,
        isLoading: false
      };
    case INST_SUBMIT_FORM_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
        isLoggedIn: false,
        knolageInstent: action.payload,
        isLoading: false
      };



    case CURRENT_INST_SUBMIT_FORM:
      return {
        ...state,
        success: false,
        error: null,
        isLoggedIn: true,
        currentInsteance: action.payload,
        isActiveBtn: true,
        isLoading: true
      };
    case CURRENT_INST_SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        success: true,
        error: null,
        isLoggedIn: false,
        currentInsteance: action.payload,
        isActiveBtn: false,
        isLoading: false
      };
    case CURRENT_INST_SUBMIT_FORM_ERROR:
      return {
        ...state,
        success: false,
        error: action.payload,
        isLoggedIn: false,
        currentInsteance: null,
        isActiveBtn: false,
        isLoading: false
      };




    case NEXT_BTN:
      return {
        ...state,
        currentStep: action.payload
      };
    default:
      return state;
  }
  // switch (action.type) {
  //     case 'registration/next':
  //         return { currentStep: state.currentStep + 1 };
  //     case 'FETCH_LIST_SUCCESS':
  //         return {
  //             ...state,
  //             listData: action.payload,
  //             error: null
  //         };
  //     case 'FETCH_LIST_FAILURE':
  //         return {
  //             ...state,
  //             listData: null,
  //             error: action.payload
  //         };
  //     default:
  //         return state;
  // }
}
