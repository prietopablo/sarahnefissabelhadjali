import "./Home.css";

export const Home = () => {
	const pictures = [
		{
			background: "lightblue",
			angle: Math.random() * 2 * Math.PI,
			radius: Math.random() * ((window.innerWidth - 300) / 2),
		},
		{
			background: "goldenrod",
			angle: Math.random() * 2 * Math.PI,
			radius: Math.random() * ((window.innerWidth - 300) / 2),
		},
		{
			background: "antiquewhite",
			angle: Math.random() * 2 * Math.PI,
			radius: Math.random() * ((window.innerWidth - 300) / 2),
		},
		{
			background: "rebeccapurple",
			angle: Math.random() * 2 * Math.PI,
			radius: Math.random() * ((window.innerWidth - 300) / 2),
		},
		{
			background: "lightblue",
			angle: Math.random() * 2 * Math.PI,
			radius: Math.random() * ((window.innerWidth - 300) / 2),
		},
	];
	return (
		<div className='home-container'>
			{pictures.map((picture, index) => {
				const style = {
					background: picture.background,
					left: `${Math.cos(picture.angle) * picture.radius + window.innerWidth / 2 + 150 / 2}px`,
					top: `${Math.sin(picture.angle) * picture.radius + window.innerHeight / 2 + 150 / 2}px`,
				};
				console.log("🚀 ~ {pictures.map ~ style:", style);
				console.log(
					"🚀 ~ {pictures.map ~ (window.innerWidth:",
					window.innerWidth,
				);
				return <div key={index} className='home-picture' style={style} />;
			})}
		</div>
	);
};
