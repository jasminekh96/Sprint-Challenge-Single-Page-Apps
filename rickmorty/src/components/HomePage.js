import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
	const welcomepage = styled.div`width: 800px;`;
	// const Welcome = styled.h1`color: #663399;`;
	const welcomeprgh = styled.p`width: 800px;`;
	return (
		<welcomepage>
			<h1>Welcome to the homepage! </h1>
			<welcomeprgh>
				Everyone wants to catch em all, if you want to learn about some of the most famous Pokemon click the characters
				link above! Beware, you will enter a rabbit-hole of searching through the amazing functional search bar that I
				have invested time, sweat, and tears into creating!
			</welcomeprgh>
		</welcomepage>
	);
};
export default HomePage;
