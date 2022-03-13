import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./authentication/PrivateRouter";
import PublicRouter from "./authentication/PublicRouter";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";

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
				path="/"
				element={
					<PrivateRouter>
						<HomePage />
					</PrivateRouter>
				}
			/>
		</Routes>
	);
};

export default Router;