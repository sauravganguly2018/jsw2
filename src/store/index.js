import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import listReducer from './reducers/listReducer';
import processesReducer from './reducers/processesReducer';
import registrationProgressReducer from './reducers/registrationProgressReducer';
import CreateProcessReducer from './reducers/createPrrocessReducer';
import CreateProcessManualyReducer from './reducers/CreateProcessManualyReducer';
import locationReducer from './reducers/locationReducer';

const store=configureStore({
    reducer:{
        auth:authReducer,
        home:listReducer,
        processes:processesReducer,
        registration:registrationProgressReducer,
        createProcess: CreateProcessReducer,
        CreateProcessManualy: CreateProcessManualyReducer,
        location: locationReducer,
    }
})

export default store;