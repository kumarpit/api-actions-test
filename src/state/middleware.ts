import { Actions } from "./reducer";
import Network from "./network";

const restMiddleware = (store: any) => (next: any) => async (action: Actions) => {
    if (action.type != "NETWORK_REQUEST") next(action);
    const { method, body, path, handle_response } = action.payload;
    
    switch(method) {
        case "get":
            Network.get({ path })
            .then((res) => store.dispatch({ type: handle_response, payload: res.data }))
            .catch((err) => console.log(err))
            break;

        case "post": 
            console.log(body);
            Network.post({ path, body })
            .then((res) => store.dispatch({ type: handle_response, payload: res.data }))
            .catch((err) => console.log(err))
            break;
    }  
};

export default restMiddleware;