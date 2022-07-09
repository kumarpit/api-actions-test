type Nullable<T> = T | null;

export const RSAA = '@@restful-middleware/RSAA';

export enum HTTPMethod {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT'
}

export type RSAAobject = {
    endpoint: string,
    method?: HTTPMethod,
    body?: object,
    nextAction: string,
    onSuccess?: CBFunction,
    refresh?: boolean
}

export const defaultRSAA: RSAAobject = {
	endpoint: '/',
	method: HTTPMethod.GET,
	nextAction: '',
	onSuccess: null,
	refresh: false,
};

export type CBFunction = Nullable<(res: any, dispatch: any) => void>;

export type Action = {
    type: string,
    payload?: any,
    [RSAA]?: any,
}
