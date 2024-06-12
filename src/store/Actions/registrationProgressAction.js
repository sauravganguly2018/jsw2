import axios from 'axios';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR';
export const NEXT_BTN = 'NEXT_BTN';

export const INST_SUBMIT_FORM = 'INST_SUBMIT_FORM';
export const INST_SUBMIT_FORM_SUCCESS = 'INST_SUBMIT_FORM_SUCCESS';
export const INST_SUBMIT_FORM_ERROR = 'INST_SUBMIT_FORM_ERROR';

export const CURRENT_INST_SUBMIT_FORM = 'CURRENT_INST_SUBMIT_FORM';
export const CURRENT_INST_SUBMIT_FORM_SUCCESS = 'CURRENT_INST_SUBMIT_FORM_SUCCESS';
export const CURRENT_INST_SUBMIT_FORM_ERROR = 'CURRENT_INST_SUBMIT_FORM_ERROR';



export const handleNextStep = (steps, currentStep, endpoint, params) => {

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return async (dispatch) => {
    dispatch({ type: INST_SUBMIT_FORM });
    try {
      const response = await axios.post(`${BASE_URL}${endpoint}`, params, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      dispatch({ type: INST_SUBMIT_FORM_SUCCESS, payload: response.data });
      if (currentStep < steps.data.length) {
        dispatch({ type: NEXT_BTN, payload: currentStep + 1 });
      }

    } catch (error) {
      alert(error.message)
      dispatch({ type: INST_SUBMIT_FORM_ERROR, payload: error.message });
    }
  };
  // return { type: NEXT_BTN, payload: currentStep + 1 };
};



export const handleCurrentInstance = (steps, currentStep, endpoint, params) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return async (dispatch) => {
    dispatch({ type: INST_SUBMIT_FORM });
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}${params}`, {
      // const response = await axios.get(`${BASE_URL}${endpoint}?process_name=${params.process_name}&instance_id=${params.instance_id}`, {
        // headers: {
        //   'Content-Type': 'application/json'
        // },
      });

      for (let index = 0; index < steps.data.length; index++) {
        const item = steps.data[index];
        if (item.action_event === response.data.data[0].action_event) {
          dispatch({ type: NEXT_BTN, payload: currentStep + index +1});
        }
      }

      dispatch({ type: CURRENT_INST_SUBMIT_FORM_SUCCESS, payload: response.data });
      // dispatch({ type: NEXT_BTN, payload: currentStep + 3 });
    } catch (error) {
      // alert(error.message)
      dispatch({ type: CURRENT_INST_SUBMIT_FORM_ERROR, payload: error.message });
    }
  };
  // return { type: NEXT_BTN, payload: currentStep + 1 };
};



export const getData = (endpoint, params) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return async (dispatch) => {
    dispatch({ type: SUBMIT_FORM });
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}?${params.key}=${params.process_name}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      dispatch({ type: SUBMIT_FORM_SUCCESS, payload: response.data });
    } catch (error) {
      alert(error.message)
      dispatch({ type: SUBMIT_FORM_ERROR, payload: error.message });
    }
  };
};


