import { StorageHelper } from "helper/storage-helper";
import { useAuthStore } from "hooks/store-hooks";

type AuthData = {
  token: string;
  user: any;
};

export const useAuth = () => {
  const authStore = useAuthStore();
  const storageHelper = new StorageHelper<AuthData>("@auth");

  function login(body: AuthData) {
    storageHelper.save(body);
    authStore.setAuth(body.user, body.token);
  }

  function logout() {
    storageHelper.delete();
    authStore.setUnAuth();
  }

  function initialize() {
    if (authStore.status === "wait") {
      const authData = storageHelper.get();

      if (!authData) {
        authStore.setUnAuth();
      } else {
        authStore.setAuth(authData.user, authData.token);
      }
    }
  }

  return {
    isAuth: authStore.isAuth,
    isIdle: authStore.status === "wait",
    user: authStore.user,
    token: authStore.token,
    initialize,
    login,
    logout,
  };
};
