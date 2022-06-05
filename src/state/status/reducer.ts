import { Actions } from '../reducer';

export type StatusStore = {
    [key: string]: {
        loading: boolean,
        error: string,
    }
}; 

const initialState: StatusStore = {};

const statusReducer = (
    state: StatusStore = initialState,
    { type, payload }: Actions
): StatusStore => {
    console.log(type);
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
    if (!matches) return state;
    const [, requestName, requestState] = matches;
    
    let err = '';
    if (requestState == "FAILURE") err = payload.message;

    return {
        ...state,
        [requestName]: {
            loading: requestState == "REQUEST",
            error: err
        }   
    }
}

export default statusReducer;