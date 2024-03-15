import "./Home.css";

export const Home = () => {
	return (
		<div className='home'>
			<Welcome />
			<MyPlant />
			<Stone />
			<Hanger />
			<Clastre />
		</div>
	);
};

const Welcome = () => {
	return <div className='welcome'>Welcome</div>;
};

const MyPlant = () => {
	return (
		<div className='plant'>
			<img className='plant-img' src='../static/myPlant.png' alt='' />
		</div>
	);
};

const Stone = () => {
	return (
		<div className='stone'>
			<img className='stone-img' src='../static/stone.png' alt='' />
		</div>
	);
};

const Hanger = () => {
	return (
		<div className='hanger'>
			<img className='hanger-img' src='../static/hanger.png' alt='' />
		</div>
	);
};
const Clastre = () => {
	return (
		<div className='hanger'>
			<img className='hanger-img' src='../static/clastre.png' alt='' />
		</div>
	);
};
