import { Actions } from "./reducer";
import axios from "axios";

// network requests should be made from here.
// for that I need - access token - which I'll get from the auth store
// and I'll need the request body and http verb

const base_uri = process.env.REACT_APP_BASE_URI;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const restMiddleware = (store: any) => (next: any) => async (action: Actions) => {
    if (action.type != "NETWORK_REQUEST") next(action);
    const { method, body, route } = action.payload;
    
};

export default restMiddleware