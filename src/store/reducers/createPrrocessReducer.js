import { UPLOAD_FILE, UPLOAD_SUCCESS, UPLOAD_FAILURE } from '../Actions/createPrrocessActions';

const initialState = {
  isLoading: false,
  uploadedFile: null,
  error: null,
};

const CreateProcessReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        uploadedFile: action.payload,
        error: null,
      };
    case UPLOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        uploadedFile: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CreateProcessReducer;