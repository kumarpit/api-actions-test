import { Actions } from "./reducer";
import StatusDispatchers from "./status/dispatchers";
import Network from "./network";

const next_action = (type: string, payload: object) => {
    return { type: type, payload: payload };
}

const restMiddleware = (store: any) => (next: any) => async (action: Actions) => {
    if (action.type != "NETWORK_REQUEST" && action.type != "AUTHENTICATE") next(action);

    const { method, body, path, handle_response } = action.payload;
    const { dispatch } = store;
    
    if (action.type == "NETWORK_REQUEST") {

        StatusDispatchers.loading(dispatch, path);

        switch(method) {
            case "get":
                try {
                    const res = await Network.get({ path });
                    dispatch(next_action(handle_response, res.data))
                    break;    
                } catch (err: any) {
                    return StatusDispatchers.failure(dispatch, path, err);
                }

            case "post": 
                try {
                    const res = await Network.post({ path, body });
                    dispatch(next_action(handle_response, res.data));
                    break;
                } catch (err: any) {
                    return StatusDispatchers.failure(dispatch, path, err);
                }
        }  

        return StatusDispatchers.success(dispatch, path);
    
    } else if (action.type == "AUTHENTICATE") {
        
        StatusDispatchers.loading(dispatch, path);

        switch(path) {
            case "login":      
                try {
                    const res = await Network.post({ path, body });
                    Network.configure({
                        authorization: `BEARER ${res.data.access_token}`
                    })
                    dispatch(next_action(handle_response, res.data))
                    break;
                } catch (err: any) {
                    return StatusDispatchers.failure(dispatch, path, err);
                }
            
            case "logout":
                try {
                    const res = await Network.post({ path, body: { refresh_token: store.getState().refresh_token } });    
                    Network.configure({ authorization: ''});
                    store.dispatch(next_action(handle_response, res.data))
                    break;
                } catch (err: any) {
                    return StatusDispatchers.failure(dispatch, path, err)
                }

            case "token":
                try {
                    const res = await Network.post({ path, body: { refresh_token: store.getState().refresh_token } });
                    Network.configure({ 
                        authorization: `BEARER ${res.data.new_access_token}`
                    })
                    dispatch(next_action(handle_response, res.data))
                    break;
                } catch (err: any) {
                    return StatusDispatchers.failure(dispatch, path, err)
                } 
        }

        return StatusDispatchers.success(dispatch, path);
    }
};

export default restMiddleware;