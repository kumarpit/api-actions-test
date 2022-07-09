import {Action} from '../types';
import * as AuthActions from './actions';

export type AuthStore = {
    access_token: string;
    refresh_token: string;
}

const initialState: AuthStore = {access_token: '', refresh_token: ''};

const authReducer = (
    state: AuthStore = initialState,
    {type, payload}: Action,
): AuthStore => {
  switch (type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        access_token: '',
        refresh_token: '',
      };
    case AuthActions.TOKEN:
      return {
        ...state,
        access_token: payload.new_access_token,
      };
    default:
      return state;
  }
};

export default authReducer;
