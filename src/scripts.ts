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

//@ts-ignore
export const ColorThemeContext = React.createContext();

//@ts-ignore
export const WasTitleClicked = React.createContext(false);
