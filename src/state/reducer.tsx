import { configureStore } from '@reduxjs/toolkit';
import countReducer from './counter/reducer';
import loggerMiddleware from './middleware';

export type Actions = {
    type: String,
    payload: Object
}

export default configureStore({
    reducer: countReducer,
    middleware: (gdm) => gdm().concat(loggerMiddleware)
})