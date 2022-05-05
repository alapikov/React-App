import React, { useState } from 'react';
// @ts-ignore
import { scrollToTop } from './../scripts.ts';

function ButtonUp() {
	let [drawButton, setDrawButton] = useState('ButtonUp ButtonUpHidden');

	(function watchScroll() {
		setInterval(() => {
			const scrollValue = window.scrollY;
			// console.log('scrollValue now is: ' + scrollValue)
			if (scrollValue > 1200) {
				setDrawButton((drawButton = 'ButtonUp'));
			}
			if (scrollValue <= 1200) {
				setDrawButton((drawButton = 'ButtonUp ButtonUpHidden'));
			}
		}, 1000);
	})();

	return (
		<div id='ButtonUpCont' className={drawButton} onClick={scrollToTop}>
			<div id='ButtonUpArrow' />
		</div>
	);
}

export default ButtonUp;
