import { Center, Spinner } from "@chakra-ui/react";
import { useAuth } from "hooks/auth-hooks/useAuth";
import { useLayoutEffect } from "react";
import AppRouter from "./routes/app-routes/AppRoutes";
import AuthRouter from "./routes/auth-routes/AuthRoutes";

function Root() {
  const { initialize, isIdle, isAuth } = useAuth();
  useLayoutEffect(() => {
    initialize();
  }, []);

  if (isIdle) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return isAuth ? <AppRouter /> : <AuthRouter />;
}

export default Root;
