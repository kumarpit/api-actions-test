import {useSelector} from 'react-redux';

export const useTokens = () => {
  const access_token = useSelector((state: any) => state.auth.access_token);
  const refresh_token = useSelector((state: any) => state.auth.refresh_token);
  return {access_token, refresh_token};
};
