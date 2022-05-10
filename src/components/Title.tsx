import React, { useState, useEffect } from 'react';
//@ts-ignore
import { globalData } from './../scripts.ts';

interface TitleProps {
	title: string;
}

const Title = ({ title }: TitleProps) => {
	let [classList, setClassList] = useState('Title TitleAnimate');

	useEffect(() => {
		setClassList((classList = 'Title'));
	}, []);

	function changeTitleColor() {
		if (globalData.wasTitleClicked === false) {
			setClassList((classList = 'Title colored'));
			globalData.wasTitleClicked = true;
		} else {
			setClassList((classList = 'Title'));
			globalData.wasTitleClicked = false;
		}
	}

	return (
		<div id='Title' className={classList} onClick={changeTitleColor}>
			{title}
		</div>
	);
};

export default Title;
