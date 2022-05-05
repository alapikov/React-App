import React from 'react';
import Button from '@mui/material/Button';

interface ButtonDefaultProps {
	buttonName: string | number;
}

function ButtonDefault({ buttonName }: ButtonDefaultProps) {
	return (
		// ** примечание 1 **
		<Button className='ButtonDefault' type='button' variant='contained'>
			{buttonName}
		</Button>
	);
}

export default ButtonDefault;
