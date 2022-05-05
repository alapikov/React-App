import React, { useState, useEffect } from 'react';
// @ts-ignore
import { globalData } from './../../scripts.ts';
// @ts-ignore
import useEffectOnFirstRender from './../../customHooks/useEffectOnFirstRender.tsx';

interface CardPlanetProps {
	name: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	surface_water: string;
	population: string;
	rotation_period: string;
}

function CardPlanet(data: CardPlanetProps) {
	let [classList, setClassList] = useState('CardCont CardAnimateMount');

	useEffectOnFirstRender(() => {
		setClassList((classList = 'CardCont'));
		globalData.numOfCards++;
		document.title = ` ${globalData.numOfCards} cards now!`;
	}, []);

	// ** примечание 3 **
	return (
		<div className={classList}>
			<div className='CardPropsCont'>
				<div className='CardTitle'>
					{data.name}
					<img className='CardButtonClose' />
				</div>
				<div className='CardLabel'>planet</div>
				<div className='CardPropHeight CardRow'>
					<div className='CardPropLeft'>Orbital period</div>
					<div className='CardPropRight'>{data.orbital_period}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropMass CardRow'>
					<div className='CardPropLeft'>Diameter</div>
					<div className='CardPropRight'>{data.diameter}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropHaircolor CardRow'>
					<div className='CardPropLeft'>Climate type</div>
					<div className='CardPropRight'>{data.climate}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropSkincolor CardRow'>
					<div className='CardPropLeft'>Gravity</div>
					<div className='CardPropRight'>{data.gravity}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropEyecolor CardRow'>
					<div className='CardPropLeft'>Surface water</div>
					<div className='CardPropRight'>{data.surface_water}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropBirthyear CardRow'>
					<div className='CardPropLeft'>Population</div>
					<div className='CardPropRight'>{data.population}</div>
				</div>
				<div className='CardSplitLine'></div>
				<div className='CardPropGender CardRow'>
					<div className='CardPropLeft'>Rotation period</div>
					<div className='CardPropRight'>{data.rotation_period}</div>
				</div>
			</div>
		</div>
	);
}

export default CardPlanet;
