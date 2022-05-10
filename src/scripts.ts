import React from 'react';

export const globalData = {
	numOfCards: 0,
	wasTitleClicked: false,
};

export function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

function commonDebounce(delay: number, callback: Function) {
	let timeout;
	return function () {
		clearTimeout(timeout);
		timeout = setTimeout(callback, delay);
	};
}

export const ColorThemeContext = React.createContext();

export const WasTitleClicked = React.createContext(false);

export const returnRandomData = (typeOfData: string, quantityIndex: number) => {
	function searchForRandomData() {
		let addressIndex = Math.floor(Math.random() * quantityIndex + 1);
		const httpRequest = `https://swapi.dev/api/${typeOfData}/${addressIndex}/`;
		return fetch(httpRequest, { headers: { Accept: 'application/json' } })
			.then((response) => {
				if (!response.ok) {
					return searchForRandomData();
				}
				return response.json();
			})
			.then((response) => {
				return response;
			});
	}
	return searchForRandomData();
};

export let cardFlag = 'person';

export const returnSearchedData = (inputText: string) => {
	let addressIndex = 1;

	function searchForPerson() {
		const httpRequest = `https://swapi.dev/api/people/${addressIndex}/`;
		return fetch(httpRequest, { headers: { Accept: 'application/json' } })
			.then((response) => {
				if (!response.ok && addressIndex <= 83) {
					addressIndex++;
					return searchForPerson();
				} else if (!response.ok && addressIndex >= 83) {
					addressIndex = 1;
					cardFlag = 'planet';
					return searchForPlanet();
				}
				return response.json();
			})
			.then((response) => {
				if (response.name.toLowerCase() === inputText.toLowerCase()) {
					return response;
				} else if (addressIndex <= 83) {
					addressIndex++;
					// console.log('not found in people, looking further...')
					return searchForPerson();
				} else {
					// console.log('not found!')
					return { name: 'data not found!' };
				}
			});
	}

	function searchForPlanet() {
		const httpRequest = `https://swapi.dev/api/planets/${addressIndex}/`;
		return fetch(httpRequest, { headers: { Accept: 'application/json' } })
			.then((response) => {
				if (!response.ok && addressIndex <= 60) {
					addressIndex++;
					return searchForPlanet();
				} else if (!response.ok && addressIndex >= 60) {
					addressIndex = 1;
					cardFlag = 'spaceship';
					return searchForSpaceship();
				}
				return response.json();
			})
			.then((response) => {
				if (response.name.toLowerCase() === inputText.toLowerCase()) {
					return response;
				} else if (addressIndex <= 60) {
					addressIndex++;
					// console.log('not found in planets, looking further...')
					return searchForPlanet();
				} else {
					// console.log('not found!')
					return { name: 'data not found!' };
				}
			});
	}

	function searchForSpaceship() {
		const httpRequest = `https://swapi.dev/api/starships/${addressIndex}/`;
		return fetch(httpRequest, { headers: { Accept: 'application/json' } })
			.then((response) => {
				if (!response.ok && addressIndex <= 17) {
					addressIndex++;
					return searchForSpaceship();
				} else if (!response.ok && addressIndex >= 17) {
					return { name: 'data not found!' };
				}
				return response.json();
			})
			.then((response) => {
				if (response.name.toLowerCase() === inputText.toLowerCase()) {
					return response;
				} else if (addressIndex <= 17) {
					addressIndex++;
					// console.log('not found in spaceships, looking further...')
					return searchForSpaceship();
				} else {
					// console.log('no such data in database!')
					return { name: 'data not found!' };
				}
			});
	}
	return searchForPerson();
};

