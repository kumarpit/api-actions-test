import makeRequest from "../dispatchers";

const signup = (dispatch: any, username: string, password: string) => {
    const body = {
        username: username,
        password: password
    }
    dispatch(makeRequest("post", body, "/user"));
}

const login = (dispatch: any) => {
    dispatch(makeRequest("post", {}, "/login"))
}

const logout = (dispatch: any) => {
    dispatch(makeRequest("post", {}, "/logout"))
}

const echo = (dispatch: any) => {
    dispatch(makeRequest("get", {}, "/echo"))
}

const AuthDispatchers = {
    signup,
    login,
    echo,
    logout
}

export default AuthDispatchers;