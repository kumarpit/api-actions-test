import { Actions } from '../reducer';

export type AuthStore = {
    access_token: string;
    refresh_token: string;
}

const initialState: AuthStore = { access_token: '', refresh_token: '' };

const authReducer = (
    state: AuthStore = initialState,
    { type, payload }: Actions
): AuthStore => {
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                access_token: payload.access_token,
                refresh_token: payload.refresh_token
            }
        case "LOGOUT":
            return {
                ...state,
                access_token: '',
                refresh_token: ''
            }
        case "TOKEN":
            return {
                ...state,
                access_token: payload.new_access_token,
            }
        default:
            return state;
    }
}

export default authReducer;