import makeRequest from "../dispatchers";

const signup = (dispatch: any) => {
    dispatch(makeRequest("", {}, "/"));
}

const login = (dispatch: any) => {
    dispatch(makeRequest("", {}, "/"))
}

const logout = (dispatch: any) => {
    dispatch(makeRequest("", {}, "/"))
}

const AuthDispatchers = {
    signup,
    login,
    logout
}

export default AuthDispatchers;