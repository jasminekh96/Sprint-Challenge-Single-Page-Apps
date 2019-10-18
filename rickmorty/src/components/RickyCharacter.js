import React from 'react';

const RickyCharacter = (props) => {
	return (
		<div>
			<h1>Rick and Morty Character Stats</h1>
			<h1>Name : {props.name}</h1>
			<h2>Status: {props.status}</h2>
			<h3>Species: {props.species}</h3>
			<img src={props.url} />
		</div>
	);
};
export default RickyCharacter;
