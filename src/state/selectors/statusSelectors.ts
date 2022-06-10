import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    return useSelector((state: any) => state.status.login);
}