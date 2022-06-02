import { Actions } from "./reducer";

const loggerMiddleware = (store: any) => (next: any) => (action: Actions) => {
    if (action.type == "INCREMENT") console.log("This works!");
    next(action);
};

export default loggerMiddleware;