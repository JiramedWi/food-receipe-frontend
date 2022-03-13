import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./authentication/PrivateRouter";
import PublicRouter from "./authentication/PublicRouter";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import RegisterPage from "./page/RegisterPage";
import BookmarkPage from "./page/BookmarkPage";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRouter>
            <LoginPage />
          </PublicRouter>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRouter>
            <RegisterPage />
          </PublicRouter>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRouter>
            <HomePage />
          </PrivateRouter>
        }
      />
      <Route
        path="/bookmark"
        element={
          <PrivateRouter>
            <BookmarkPage />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};

export default Router;
