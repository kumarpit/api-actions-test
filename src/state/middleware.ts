import {Action, HTTPMethod, RSAAobject} from './types';
import StatusDispatchers from './status/dispatchers';
import Network from './network';
import {RSAA} from './types';
import {createAction} from './utils';

const restMiddleware = (store: any) => (next: any) => async (action: Action) => {
  if (!action[RSAA]) return next(action);

  const {method, body, endpoint, nextAction, onSuccess, refresh} = action[RSAA] as RSAAobject;
  const {dispatch} = store;

  let res;
  let reqBody = body;

  StatusDispatchers.loading(dispatch, endpoint);

  try {
    if (refresh) {
      reqBody = {
        ...body,
        refresh_token: store.getState().auth.refresh_token,
      };
    }
    switch (method) {
      case HTTPMethod.GET:
        res = await Network.get({path: endpoint});
        break;
      case HTTPMethod.POST:
        res = await Network.post({path: endpoint, body: reqBody});
        break;
    }
    if (onSuccess) await onSuccess(res, dispatch);
    dispatch(createAction(nextAction, res?.data));
  } catch (err: any) {
    return StatusDispatchers.failure(dispatch, endpoint, err);
  }

  return StatusDispatchers.success(dispatch, endpoint);
};

export default restMiddleware;
