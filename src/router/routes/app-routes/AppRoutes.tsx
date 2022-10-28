import MainLayout from "components/layouts/main/MainLayout";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route
            id={route.name}
            key={route.name}
            caseSensitive
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </MainLayout>
  );
}

export default AppRouter;
