import ReactDOM from 'react-dom/client';
import React, {useState} from "react";
import Title from './components/Title.tsx';
import WhiteSpace from './components/WhiteSpace.tsx';
import SearchBar from './components/SearchBar.tsx';
import ButtonUp from './components/ButtonUp.tsx';
import HeaderBar from './components/HeaderBar.tsx';
import Footer from './components/Footer.tsx';
import './styles.css';

const App = () => {

	return (
		<div className="App" id='App'>
			<WhiteSpace height='40px' />
			<HeaderBar />
			<Title title='May the force be with us all!'/>
			<SearchBar placeholder='Character, planet or spaceship from Star Wars' inputWidth='450px' buttonSearchName='Search' buttonRandomName='Random' />
			<div className='CardsCont' id='CardsCont'>
			</div>
			<ButtonUp />
			<Footer />
		</div>
	);
}

export default App;
