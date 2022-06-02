const increment = (dispatch: any) => {
    dispatch({
        type: "INCREMENT",
        payload: {}
    })
}

const decrement = (dispatch: any) => {
    dispatch({
        type: "DECREMENT",
        payload: {}
    })
}

const CountDispatchers = {
    increment,
    decrement
}

export default CountDispatchers;