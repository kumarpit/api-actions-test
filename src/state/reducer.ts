import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import statusReducer from './status/reducer';
import restMiddleware from './middleware';
import {combineReducers} from 'redux';
import reaxMiddleware from 'reax';
import { axios } from './network';

export default configureStore({
	reducer: combineReducers({auth: authReducer, status: statusReducer}),
	middleware: (gdm) => gdm({serializableCheck: false}).concat(reaxMiddleware(axios)),
});
