import { Actions } from "./reducer";

/**
 * @returns an action with a network config object
 * in the payload to allow the middleware to make 
 * the appropiate network request
 */
const request = (path: string, handle_response: string, method: string = "get", body: object = {}): Actions => { 
    return {
        type: "NETWORK_REQUEST",
        payload: {
            method,
            path,
            handle_response,
            body
        }
    }
}

export default request;