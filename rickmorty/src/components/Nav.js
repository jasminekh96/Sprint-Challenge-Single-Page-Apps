import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div>
			<div>
				<div>
					<Link to='/'>Home Page</Link>
				</div>
				<div>
					<Link to='/characters'>Characters</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
