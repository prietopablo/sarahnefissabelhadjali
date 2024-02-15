import "./Home.css";

export const Home = () => {
	const pictures = [
		{ background: "lightblue" },
		{ background: "goldenrod" },
		{ background: "antiquewhite" },
		{ background: "rebeccapurple" },
	];
	return (
		<div className='home-container'>
			{pictures.map((picture, index) => (
				<div
					key={index}
					className='home-picture'
					style={{ background: picture.background }}
				/>
			))}
		</div>
	);
};
