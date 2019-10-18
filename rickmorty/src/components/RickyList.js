import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RickyCharacter from './RickyCharacter';

const RickyList = () => {
	const [ characters, setCharacters ] = useState([]);
	const [ query, setQuery ] = useState('');
	const [ filteredPokemon, setFilteredPokemon ] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.pokemontcg.io/v1/cards`)
			.then((response) => {
				console.log(response.data.cards);
				setCharacters(response.data.cards);
			})
			.catch((error) => {
				console.log('Gotta catch em all', error);
			});
	}, []);
	useEffect(
		() => {
			setFilteredPokemon(characters.filter((pokemons) => pokemons.name.toLowerCase().includes(query.toLowerCase())));
		},
		[ query, characters ],
	);
	const handleInputChange = (event) => {
		setQuery(event.target.value);
	};
	return (
		<div>
			<h1>Pokemon gotta catch em all!</h1>
			<form>
				<input
					type='text'
					onChange={handleInputChange}
					value={query}
					name='name'
					placeholder='Search by name'
					autoComplete='off'
				/>
			</form>
			{filteredPokemon.map((charac) => {
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
