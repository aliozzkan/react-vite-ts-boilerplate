import { useRecoilState } from "recoil";
import { authAtom } from "../../store/atoms/auth-atoms";

export const useAuthStore = () => {
  const [{ user, token, status }, setAuthState] = useRecoilState(authAtom);

  const setUnAuth = () => {
    setAuthState((prev) => ({
      ...prev,
      user: null,
      status: "done",
    }));
  };

  const setAuth = (_user: any, _token: string) => {
    setAuthState((prev) => ({
      ...prev,
      user: _user,
      token: _token,
      status: "done",
    }));
  };

  return {
    isAuth: !!user && !!token,
    user,
    token,
    setAuth,
    setUnAuth,
    status,
  };
};
