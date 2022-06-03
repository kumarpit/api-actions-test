import request from "../dispatchers";

const signup = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(request("user", "[SOME ACTION]", "post", body));
}

const login = (dispatch: any) => {
    dispatch(request("login", "[SOME ACTION]", "post", {}))
}

const logout = (dispatch: any) => {
    dispatch(request("logout", "[SOME ACTION]", "post", {}))
}

const echo = (dispatch: any) => {
    dispatch(request("echo", "[SOME ACTION]"))
}

const AuthDispatchers = {
    signup,
    login,
    echo,
    logout
}

export default AuthDispatchers;