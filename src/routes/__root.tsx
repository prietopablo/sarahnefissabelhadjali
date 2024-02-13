import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Home } from "../components/Home/Home";

export const Route = createRootRoute({
	component: () => (
		<>
			<Home />
			<hr />
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	),
});
