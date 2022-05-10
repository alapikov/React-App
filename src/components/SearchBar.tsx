import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ButtonDefaultShavedLeft from './buttons/ButtonDefaultShavedLeft.tsx';
import ButtonDefaultShavedRight from './buttons/ButtonDefaultShavedRight.tsx';
import CardPerson from './cards/CardPerson.tsx';
import CardPlanet from './cards/CardPlanet.tsx';
import CardSpaceship from './cards/CardSpaceship.tsx';
import { globalData, returnRandomData, returnSearchedData, cardFlag } from './../scripts.ts';

interface SearchBarProps {
	placeholder: string;
	inputWidth: string;
	buttonSearchName: string;
	buttonRandomName: string;
}

function SearchBar({ placeholder, inputWidth, buttonSearchName, buttonRandomName }: SearchBarProps) {

	//--------------- functions for random event below
	// ** примечание 2 **
	const [cardList, setCardList] = useState([]);

	const mountRandomCard = () => {
		let typeOfData: string, quantityIndex: number;
		let typeIndex = Math.floor(Math.random() * 3 + 1);
		if (typeIndex === 1) {
			typeOfData = 'people';
			quantityIndex = 83;
		}
		if (typeIndex === 2) {
			typeOfData = 'planets';
			quantityIndex = 60;
		}
		if (typeIndex === 3) {
			typeOfData = 'starships';
			quantityIndex = 17;
		}

		returnRandomData(typeOfData, quantityIndex).then((response) => {
			let card;
			if (typeIndex === 1) {
				card = React.createElement('div', { className: '' }, <CardPerson {...response} key={globalData.numOfCards} />);
			}
			if (typeIndex === 2) {
				card = React.createElement('div', { className: '' }, <CardPlanet {...response} key={globalData.numOfCards} />);
			}
			if (typeIndex === 3) {
				card = React.createElement('div', { className: '' }, <CardSpaceship {...response} key={globalData.numOfCards} />);
			}
			const CardsCont = ReactDOM.createRoot(document.getElementById('CardsCont'));
			CardsCont.render(<div>{cardList}</div>);
			// @ts-ignore
			// ** примечание 5 **
			setCardList((cardList = cardList.unshift(card)));
			// console.log('new card is rendered!')
		});
	};

	//--------------- functions for search event below

	const mountSearchedCard = () => {
		let card;
		// @ts-ignore
		const inputText = document.querySelector('#SearchBarMain').value;
		returnSearchedData(inputText).then((response) => {
			if (cardFlag === 'person') {
				card = React.createElement('div', { className: '' }, <CardPerson {...response} key={globalData.numOfCards} />);
			} else if (cardFlag === 'planet') {
				card = React.createElement('div', { className: '' }, <CardPlanet {...response} key={globalData.numOfCards} />);
			} else {
				card = React.createElement('div', { className: '' }, <CardSpaceship {...response} key={globalData.numOfCards} />);
			}

			const CardsCont = ReactDOM.createRoot(document.getElementById('CardsCont'));
			CardsCont.render(<div>{cardList}</div>);
			// @ts-ignore
			setCardList((cardList = cardList.unshift(card)));
			// console.log('rendered!')
		});
	};

	function inputDebounce() {
		let timeout;
		return function () {
			clearTimeout(timeout);
			timeout = setTimeout(mountSearchedCard, 2500);
		};
	}

	//--------------- component render below

	return (
		<div className='SearchBarCont'>
			<div onClick={mountRandomCard}>
				<ButtonDefaultShavedLeft buttonName={buttonRandomName} />
			</div>
			<input id='SearchBarMain' className='SearchBarInput' type='text' placeholder={placeholder} style={{ width: inputWidth }} onChange={inputDebounce()} />
			<div onClick={mountSearchedCard}>
				<ButtonDefaultShavedRight buttonName={buttonSearchName} />
			</div>
		</div>
	);
}

export default SearchBar;