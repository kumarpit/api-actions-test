import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from './middleware';


export type CounterStore = {
    count: number
}

export type Actions = {
    type: String,
    payload: Object
}

const initialState: CounterStore = { count: 0 }

const countReducer = (
    state: CounterStore = initialState,
    { type, payload }: Actions
): CounterStore => {
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return state.count == 0 ? state :
            { ...state, count: state.count - 1 }
        default:
            return state;
    }
}

export default configureStore({
    reducer: countReducer,
    middleware: (gdm) => gdm().concat(loggerMiddleware)
})