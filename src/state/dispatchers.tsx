import { Actions } from "./reducer";

/**
 * @returns an action with a network config object
 * in the payload to allow the middleware to make 
 * the appropiate network request
 */
const makeRequest = (verb: string = "GET", body: object = {}, route: string): Actions => { 
    return {
        type: "NETWORK_REQUEST",
        payload: {}
    }
}

export default makeRequest;