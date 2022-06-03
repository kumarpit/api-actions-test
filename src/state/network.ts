import axios, { AxiosRequestHeaders, AxiosResponse } from 'axios';

axios.defaults.timeout = 1000;
const url = 'http://127.0.0.1:3000';
const constructPath = (path: string): string => `${url}/${path}`;

type Request = {
    path: string;
    body?: Object;
    headers?: Object;
};

const Network = {
    configure: (config: AxiosRequestHeaders): void => {
        const oldConfig = axios.defaults.headers.common;

        axios.defaults.headers.common = {
            ...oldConfig,
            ...config
        }
    },

    post: async ({
        path,
        body,
        headers,
    }: Request): Promise<AxiosResponse> => {
        const result = await axios.post(
            constructPath(path),
            body,
            headers,
        );

        return {
            ...result,
        };
    },

    get: async ({
        path,
    }: Request): Promise<AxiosResponse> => {
        const result = await axios.get(constructPath(path));

        return {
            ...result,
        };
    },
};


export default Network;