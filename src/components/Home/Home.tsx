import "./Home.css";

import myPlant from "../../ressources/myPlant.png";
import stone from "../../ressources/stone.png";
import hanger from "../../ressources/hanger.png";
import clastre from "../../ressources/clastre.png";

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
	return <div className='welcome'></div>;
};

const MyPlant = () => {
	return (
		<div className='plant'>
			<img className='plant-img hover-effect' src={myPlant} alt='' />
		</div>
	);
};

const Stone = () => {
	return (
		<div className='stone'>
			<img className='stone-img hover-effect' src={stone} alt='' />
		</div>
	);
};

const Hanger = () => {
	return (
		<div className='hanger'>
			<img className='hanger-img hover-effect' src={hanger} alt='' />
		</div>
	);
};
const Clastre = () => {
	return (
		<div className='hanger'>
			<img className='hanger-img hover-effect' src={clastre} alt='' />
		</div>
	);
};
