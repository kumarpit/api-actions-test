import { Action, RSAAobject } from "./types";
import StatusDispatchers from "./status/dispatchers";
import Network from "./network";
import { RSAA } from "./types";
import { createAction } from "./utils";

const restMiddleware = (store: any) => (next: any) => async (action: Action) => {
    if (!action[RSAA]) return next(action);

    const { method, body, endpoint, nextAction, onSuccess, refresh }: RSAAobject = action[RSAA];
    const { dispatch } = store;
    
    StatusDispatchers.loading(dispatch, endpoint);

    try {
        let res;
        let reqBody = body;
        if (refresh) {
            reqBody = {
                ...body,
                refresh_token: store.getState().auth.refresh_token
            }
        }
        switch(method){
            case "GET": 
                res = await Network.get({ path: endpoint });
                break;
            case "POST":
                res = await Network.post({ path: endpoint, body: reqBody })
                break;
        }
        if (onSuccess) await onSuccess(res, dispatch);
        dispatch(createAction(nextAction, res?.data))
        
    } catch (err: any) {
        return StatusDispatchers.failure(dispatch, endpoint, err);
    }

    return StatusDispatchers.success(dispatch, endpoint);
};

export default restMiddleware;