import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import restMiddleware from './middleware';

export type Actions = {
    type: string,
    payload: any
}

/**
 * @note make serializable false
 * https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
 */
export default configureStore({
    reducer: authReducer,
    middleware: (gdm) => gdm().concat(restMiddleware)
})