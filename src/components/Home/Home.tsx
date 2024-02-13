import { Link } from "@tanstack/react-router";

import "./Home.css";

export const Home = () => {
	return (
		<nav className='home-nav'>
			<Link to='/' className='home-links'>
				Home
			</Link>
			<Link to='/workshops' className='home-links'>
				Workshops
			</Link>
			<Link to='/about' className='home-links'>
				About
			</Link>
			<Link to='/contact' className='home-links'>
				Contact
			</Link>
		</nav>
	);
};
