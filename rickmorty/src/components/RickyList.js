import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RickyCharacter from './RickyCharacter';

const RickyList = () => {
	const [ characters, setCharacters ] = useState([]);

	// useEffect(() => {
	// 	axios
	// 		.get(`https://api.pokemontcg.io/v1/cards`)
	// 		.then((response) => {
	// 			console.log(response.data.cards);
	// 			setCharacters(response.data.cards);
	// 		})
	// 		.catch((error) => {
	// 			console.log('Gotta catch em all', error);
	// 		});
	// }, []);
	return (
		<div>
			{characters.map((charac) => {
				return (
					<RickyCharacter
						key={charac.id}
						name={charac.name}
						status={charac.nationalPokedexNumber}
						species={charac.number}
						rarity={charac.rarity}
						url={charac.imageUrl}
					/>
				);
			})}
		</div>
	);
};
export default RickyList;
