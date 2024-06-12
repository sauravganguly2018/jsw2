import axios from 'axios';


export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
// import { UPLOAD_FILE, UPLOAD_SUCCESS, UPLOAD_FAILURE } from './actionTypes';

const uploadFile = (file) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
  return async (dispatch) => {
    dispatch({ type: UPLOAD_FILE });
    try {
      const formData = new FormData();
      formData.append('csv_file', file);

      const response = await axios.post(BASE_URL+'knowledgeplane/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: UPLOAD_FAILURE, payload: error.message });
    }
  };
};
export default uploadFile;