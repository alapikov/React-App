import React, { useState, useEffect } from 'react';

interface TitleProps {
	title: string;
}

const Title = ({ title }: TitleProps) => {
	let [classList, setClassList] = useState('Title TitleAnimate');

	useEffect(() => {
		setClassList((classList = 'Title'));
	}, []);

	return (
		<div id='Title' className={classList}>
			{title}
		</div>
	);
};

export default Title;
