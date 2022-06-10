type Nullable<T> = T | null;

export const RSAA = '@@restful-middleware/RSAA';

export type RSAAobject = {
    endpoint: string,
    method?: keyof HTTPMethods,
    body?: object,
    nextAction: string,
    onSuccess?: CBFunction
}

export const defaultRSAA: RSAAobject = {
    endpoint: "/",
    method: "GET",
    nextAction: "",
    onSuccess: null
}

export type CBFunction = Nullable<(res: any, dispatch: any) => void>;

export type Action = {
    type: string,
    payload?: any,
    [RSAA]?: any,
}

export type HTTPMethods = {
    POST: string,
    PUT: string,
    GET: string,
}