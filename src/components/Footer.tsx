import React from 'react';

class Footer extends React.Component {
	render() {
		const textItalics = {
			fontFamily: `'Roboto'`,
			fontStyle: 'italic',
			fontWeight: 300,
		};

		return (
			<div className='FooterCont'>
				<div>
					© 2022{' '}
					<a className='HrefCommon' href='https://thewaltdisneycompany.com'>
						Disney
					</a>
					. All rights reserved
				</div>
				<div style={textItalics}>Star Wars Universe</div>
				<div>
					<a className='HrefCommon' href='https://www.starwars.com'>
						starwars.com
					</a>
				</div>
			</div>
		);
	}
}

export default Footer;
