import { Link } from "@tanstack/react-router";

import "./NavBar.css";

export const NavBar = () => {
	return (
		<nav className='nav'>
			<Link to='/' className='nav-link'>
				Home
			</Link>
			<Link to='/workshops' className='nav-link'>
				Workshops
			</Link>
			<Link to='/about' className='nav-link'>
				About
			</Link>
			<Link to='/contact' className='nav-link'>
				Contact
			</Link>
		</nav>
	);
};
