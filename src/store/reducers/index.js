
// import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import fetchListData from './listReducer';

// const rootReducer = combineReducers({
//     auth: authReducer,
//     home: fetchListData
//     // add other reducers here
//   });

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import fetchListData from './listReducer';
import workFlowReducer from './workFlowReducer';
import CreateProcessReducer from './createPrrocessReducer';
import CreateProcessManualyReducer from './CreateProcessManualyReducer';
import registrationProgressReducer from './registrationProgressReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    home: fetchListData,
    workFlow: workFlowReducer,
    createProcess: CreateProcessReducer,
    CreateProcessManualy: CreateProcessManualyReducer,
    registration:registrationProgressReducer,


    // add other reducers here
  });

//   export default rootReducer;