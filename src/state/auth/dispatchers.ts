import request from "../utils";
import Network from "../network";

const signup = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request({ 
        method: "POST", 
        endpoint: "signup", 
        nextAction: "[signup]", 
        body: body 
    }));
}

const login = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request({ 
        method: "POST",
        endpoint: "login",
        nextAction: "[login]",
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
        method: "POST",
        endpoint: "logout",
        nextAction: "[logout]",
        onSuccess: (res, dispatch) => {
            Network.configure({ authorization: ''});
        }
    }))
}

const token = (dispatch: any) => {
    dispatch(request({ 
        method: "POST",
        endpoint: "token",
        nextAction: "TOKEN"
    }))
}

const echo = (dispatch: any) => {
    dispatch(request({ 
        endpoint: "GET",
        nextAction: "[echo]"
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