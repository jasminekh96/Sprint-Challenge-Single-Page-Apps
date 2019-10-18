import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RickyCharacter from './RickyCharacter';
import styled from 'styled-components';

const RickyList = () => {
	const [ characters, setCharacters ] = useState([]);
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/`).then((response) => {
			console.log(response.data.results);
			setCharacters(response.data.results);
		}, []);
	});
	return (
		<div>
			{characters.map((charac) => {
				return (
					<RickyCharacter
						key={charac.id}
						name={charac.name}
						status={charac.status}
						species={charac.species}
						url={charac.image}
					/>
				);
			})}
		</div>
	);
};
export default RickyList;
