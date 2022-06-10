import { Action, RSAA, defaultRSAA, CBFunction, RSAAobject } from "./types";

/**
 * @returns an action with a network config object
 * in the payload to allow the middleware to make 
 * the appropiate network request
 */
const request = (rsaa: RSAAobject): Action => { 
    return {
        type: "[api request]",
        [RSAA]: {
            ...defaultRSAA,
            ...rsaa,
        }
    }
}

export const createAction = (type: string, payload: object) => {
    return { type: type, payload: payload };
}

export default request;