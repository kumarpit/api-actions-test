import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const login = useSelector((state: any) => state.status.login);
    const signup = useSelector((state: any) => state.status.signup);
    const logout = useSelector((state: any) => state.status.logout);
    const echo = useSelector((state: any) => state.status.echo);
    const token = useSelector((state: any) => state.status.token);

    if (login?.loading || signup?.loading || echo?.loading || logout?.loading || token?.loading) {
        return true;
    }

    return false;
}