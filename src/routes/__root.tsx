import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { NavBar } from "../components/NavBar/NavBar";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className='background-image' />
			<NavBar />
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</>
	),
});
