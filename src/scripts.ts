import React from 'react';

export const globalData = {
	numOfCards: 0,
};

export function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}

//@ts-ignore
export const ColorThemeContext = React.createContext();
