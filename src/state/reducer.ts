import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import statusReducer from './status/reducer';
import restMiddleware from './middleware';
import { combineReducers } from 'redux';


export default configureStore({
    reducer: combineReducers({ auth: authReducer, status: statusReducer }),
    middleware: (gdm) => gdm({serializableCheck: false}).concat(restMiddleware)
})