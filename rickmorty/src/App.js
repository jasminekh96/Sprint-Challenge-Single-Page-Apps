import React from 'react';
import './App.css';
import RickyList from './components/RickyList';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Route exact path='/' component={HomePage} />
			<Route path='/characters' component={RickyList} />
		</div>
	);
}

export default App;
