import React from 'react';
import styled from 'styled-components';

const RickyCharacter = (props) => {
	const Containter = styled.div`
		background-color: cyan;
		width: 880px;
		margin-left: 415px;
		padding: 40px;
		margin-top: 30px;
		border-radius: 100px;
	`;
	const Name = styled.h1`
		color: green;
		font-size: 60px;
	`;
	const Status = styled.h3`
		font-size: 40px;
		color: red;
	`;
	const Species = styled.h4`
		font-size: 30px;
		color: white;
	`;

	const Image = styled.img`border-radius: 600px;`;

	return (
		<Containter>
			<Name>Name : {props.name}</Name>
			<Status>Nation Pokedex Number: {props.status}</Status>
			<Species>Number: {props.species}</Species>
			<h1>Rarity: {props.rarity}</h1>
			<Image src={props.url} />
		</Containter>
	);
};
export default RickyCharacter;
