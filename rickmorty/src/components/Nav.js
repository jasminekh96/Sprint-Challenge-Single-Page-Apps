import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
	return (
		<cardTitle>
			<div>
				<div>
					<Link to='/'>Home Page</Link>
				</div>
				<div>
					<Link to='/characters'>Pokemon!</Link>
				</div>
			</div>
		</cardTitle>
	);
};

export default Nav;
