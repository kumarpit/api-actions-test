import request from "../utils";
import Network from "../network";
import * as AuthActions from "./actions";
import { HTTPMethod } from "../types";

const signup = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request({ 
        method: HTTPMethod.POST, 
        endpoint: "signup", 
        nextAction: AuthActions.SIGNUP, 
        body: body 
    }));
}

const login = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request({ 
        method: HTTPMethod.POST,
        endpoint: "login",
        nextAction: AuthActions.LOGIN,
        body: body,
        onSuccess: (res, dispatch) => {
            Network.configure({
                authorization: `BEARER ${res.data.access_token}`
            })
        }
    }))
}

const logout = (dispatch: any) => {
    dispatch(request({ 
        method: HTTPMethod.POST,
        endpoint: "logout",
        nextAction: AuthActions.LOGOUT,
        refresh: true,
        onSuccess: (res, dispatch) => {
            Network.configure({ authorization: ''});
        }
    }))
}

const token = (dispatch: any) => {
    dispatch(request({ 
        method: HTTPMethod.POST,
        endpoint: "token",
        refresh: true,
        nextAction: AuthActions.TOKEN,
        onSuccess: (res, dispatch) => {
            Network.configure({ authorization: `BEARER ${res.data.new_access_token}` })
        }
    }))
}

const echo = (dispatch: any) => {
    dispatch(request({ 
        endpoint: "echo",
        nextAction: AuthActions.ECHO,
        onSuccess: (res, dispatch) => {
            console.log(res.data);
        }
    }))
}

const AuthDispatchers = {
    signup,
    login,
    echo,
    token,
    logout
}

export default AuthDispatchers;