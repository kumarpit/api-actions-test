import { Actions } from '../reducer';

export type AuthStore = {
    username: string,
    access_token: string;
    refresh_token: string;
}

const initialState: AuthStore = { username: '', access_token: '', refresh_token: '' };

const authReducer = (
    state: AuthStore = initialState,
    { type, payload }: Actions
): AuthStore => {
    switch (type) {
        case "LOGIN":
            return {
                ...state,
                username: payload.username,
                access_token: payload.access_token,
                refresh_token: payload.access_token
            }
        case "LOGOUT":
            return {
                ...state,
                username: '',
                access_token: '',
                refresh_token: ''
            }
        default:
            return state;
    }
}

export default authReducer;