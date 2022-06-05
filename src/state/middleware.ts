import { Actions } from "./reducer";
import StatusDispatchers from "./status/dispatchers";
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
                return;

            case "post": 
                Network.post({ path, body })
                .then((res) => dispatch(new_action(handle_response, res.data)))
                .catch((err) => console.log(err))
                return;
        }  
    
    } else {
        switch(path) {
            case "login":
                StatusDispatchers.loading(dispatch, "login");
                Network.post({ path, body })
                .then((res) => {
                    Network.configure({ 
                        authorization: `BEARER ${res.data.access_token}`
                    })
                    dispatch(new_action(handle_response, res.data))
                })
                .catch((err) => console.log(err));
                return;
            
            case "logout":
                Network.post({ path, body: { refresh_token: store.getState().refresh_token } })
                .then((res) => {
                    Network.configure({ authorization: ''});
                    store.dispatch(new_action(handle_response, res.data))
                })
                .catch((err) => console.log(err));
                return;

            case "token":
                Network.post({ path, body: { refresh_token: store.getState().refresh_token } })
                .then((res) => {
                    Network.configure({ 
                        authorization: `BEARER ${res.data.new_access_token}`
                    })
                    dispatch(new_action(handle_response, res.data))
                })
                .catch((err) => console.log(err));
                return;
        }
    }
};

export default restMiddleware;