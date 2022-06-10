import { Action, RSAAobject } from "./types";
import StatusDispatchers from "./status/dispatchers";
import Network from "./network";
import { RSAA } from "./types";
import { createAction } from "./utils";

const restMiddleware = (store: any) => (next: any) => async (action: Action) => {
    if (!action[RSAA]) return next(action);

    const { method, body, endpoint, nextAction, onSuccess }: RSAAobject = action[RSAA];
    const { dispatch } = store;
    
    StatusDispatchers.loading(dispatch, endpoint);

    switch(method) {
        case "GET":
            try {
                const res = await Network.get({ path: endpoint });
                if (onSuccess) await onSuccess(res, dispatch);
                dispatch(createAction(nextAction, res.data))
                break;    
            } catch (err: any) {
                return StatusDispatchers.failure(dispatch, endpoint, err);
            }

        case "POST": 
            try {
                const res = await Network.post({ path: endpoint, body });
                if (onSuccess) await onSuccess(res, dispatch);
                dispatch(createAction(nextAction, res.data));
                break;
            } catch (err: any) {
                return StatusDispatchers.failure(dispatch, endpoint, err);
            }
    }  

    return StatusDispatchers.success(dispatch, endpoint);
};

export default restMiddleware;