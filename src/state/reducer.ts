import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import statusReducer from './status/reducer';
import restMiddleware from './middleware';
import { combineReducers } from 'redux';

export type Actions = {
    type: string,
    payload: any
}

/**
 * @note make serializable false
 * https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
 */
export default configureStore({
    reducer: combineReducers({ auth: authReducer, status: statusReducer }),
    middleware: (gdm) => gdm().concat(restMiddleware)
})