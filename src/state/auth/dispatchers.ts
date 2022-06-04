import request from "../dispatchers";

const signup = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request("user", "SIGNUP", "post", body));
}

const login = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request("login", "LOGIN", "post", body))
}

const logout = (dispatch: any) => {
    dispatch(request("logout", "LOGOUT", "post", {}))
}

const echo = (dispatch: any) => {
    dispatch(request("echo", "ECHO"))
}

const AuthDispatchers = {
    signup,
    login,
    echo,
    logout
}

export default AuthDispatchers;