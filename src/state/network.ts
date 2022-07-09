import axios, {AxiosRequestHeaders, AxiosResponse} from 'axios';

axios.defaults.timeout = 1000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
			...config,
		};
	},

	post: async ({
		path,
		body,
	}: Request): Promise<AxiosResponse> => {
		const result = await axios.post(
			constructPath(path),
			body,
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
