import {Action} from '../types';

export type StatusStore = {
    [key: string]: {
        loading: boolean,
        success: boolean,
        error: string,
    }
};

const initialState: StatusStore = {};

const statusReducer = (
    state: StatusStore = initialState,
    {type, payload}: Action,
): StatusStore => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  let err = '';
  if (requestState == 'FAILURE') err = payload.message;

  return {
    ...state,
    [requestName]: {
      loading: requestState == 'REQUEST',
      success: requestState == 'SUCCESS',
      error: err,
    },
  };
};

export default statusReducer;
