import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/workshops")({
	component: Workshops,
});

function Workshops() {
	return <div className='p-2'>Hello from Workshops!</div>;
}
