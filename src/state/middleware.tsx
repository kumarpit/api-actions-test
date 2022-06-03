import { Actions } from "./reducer";

// network requests should be made from here.
// for that I need - access token - which I'll get from the auth store
// and I'll need the request body and http verb

const restMiddleware = (store: any) => (next: any) => (action: Actions) => {
    if (action.type == "NETWORK_REQUEST") console.log("This works!");
    next(action);
};

export default restMiddleware