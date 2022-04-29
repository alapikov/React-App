import ReactDOM from 'react-dom/client';
import React, {useState} from "react";
import InnerBody from './components/InnerBody.tsx';
import Title from './components/Title.tsx';
import WhiteSpace from './components/WhiteSpace.tsx';
import SearchBar from './components/SearchBar.tsx';
import ButtonUp from './components/ButtonUp.tsx';
import HeaderBar from './components/HeaderBar.tsx';
import Footer from './components/Footer.tsx';
import {ColorThemeContext} from './scripts.ts';
//@ts-ignore
import './styles.css';


const App = () => {

	let [colorTheme, setColorTheme] = useState('light');

	return (
		<ColorThemeContext.Provider value={{colorTheme, setColorTheme}}>
			<div id="innerBody" colorTheme={colorTheme}>
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
			</div>
		</ColorThemeContext.Provider>	
	);
}

export default App;
