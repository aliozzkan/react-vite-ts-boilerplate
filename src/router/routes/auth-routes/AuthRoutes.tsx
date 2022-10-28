import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./routes";

function AuthRouter() {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          id={route.name}
          key={route.name}
          caseSensitive
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default AuthRouter;
