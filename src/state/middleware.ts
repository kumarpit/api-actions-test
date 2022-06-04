import { Actions } from "./reducer";
import Network from "./network";

const new_action = (type: string, payload: object) => {
    return { type: type, payload: payload };
}

const restMiddleware = (store: any) => (next: any) => async (action: Actions) => {
    if (action.type != "NETWORK_REQUEST" && action.type != "AUTHENTICATE") next(action);
    
    const { method, body, path, handle_response } = action.payload;
    const { dispatch } = store;

    
    if (action.type == "NETWORK_REQUEST") {
        switch(method) {
            case "get":
                Network.get({ path })
                .then((res) => {
                    console.log(res.data);
                    dispatch(new_action(handle_response, res.data))
                })
                .catch((err) => console.log(err))
                break;

            case "post": 
                Network.post({ path, body })
                .then((res) => dispatch(new_action(handle_response, res.data)))
                .catch((err) => console.log(err))
                break;
        }  
    } else {
        switch(path) {
            case "login":
                Network.post({ path, body })
                .then((res) => {
                    Network.configure({ 
                        authorization: `BEARER ${res.data.access_token}`
                    })
                    dispatch(new_action(handle_response, res.data))
                })
                .catch((err) => console.log(err));
                break;
        }
    }
};

export default restMiddleware;