import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducer';
import restMiddleware from './middleware';

export type Actions = {
    type: string,
    payload: any
}

export default configureStore({
    reducer: authReducer,
    middleware: (gdm) => gdm().concat(restMiddleware)
})