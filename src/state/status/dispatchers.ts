const loading = (dispatch: any, name: string) => {
  dispatch({type: `${name}_REQUEST`, payload: {}});
};

const success = (dispatch: any, name: string) => {
  dispatch({type: `${name}_SUCCESS`, payload: {}});
};

const failure = (dispatch: any, name: string, data: any = {}) => {
  dispatch({type: `${name}_FAILURE`, payload: {message: data.response.data}});
};

const StatusDispatchers = {
  loading,
  success,
  failure,
};

export default StatusDispatchers;
