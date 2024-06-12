import axios from 'axios';

export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SUBMIT_FORM_SUCCESS = 'SUBMIT_FORM_SUCCESS';
export const SUBMIT_FORM_ERROR = 'SUBMIT_FORM_ERROR';

const CreateProcessManualyAction = (params) => {
    console.log('params: ', params);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    return async (dispatch) => {
        dispatch({ type: SUBMIT_FORM });
        try {
            const response = await axios.post(BASE_URL + 'knowledgeplane', params, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            dispatch({ type: SUBMIT_FORM_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: SUBMIT_FORM_ERROR, payload: error.message });
        }
    };
};

export default CreateProcessManualyAction;
