import React, {useState, useEffect} from "react";
// @ts-ignore
import {globalData} from './../../scripts.ts';

interface CardSpaceshipProps {
    name: string,
    model: string,
    length: string,
    crew: string,
    passengers: string,
    consumables: string,
    hyperdrive_rating: string,
    starship_class: string,
}


function CardSpaceship(data: CardSpaceshipProps) {

    let [classList, setClassList] = useState('CardCont CardAnimateMount');
    useEffect(() => {
        setClassList(classList = 'CardCont');
        globalData.numOfCards++;
        document.title = ` ${globalData.numOfCards} cards now!`
    }, [])


    return (
        <div className={classList}>
            <div className="CardPropsCont">
            <div className="CardTitle">{data.name}
                <img className="CardButtonClose" src='./images/buttonClose.svg' />
                </div>
                <div className="CardLabel">spaceship</div>
                <div className="CardPropHeight CardRow">
                    <div className="CardPropLeft">Length</div>
                    <div className="CardPropRight">{data.length}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropMass CardRow">
                    <div className="CardPropLeft">Model</div>
                    <div className="CardPropRight">{data.model}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropHaircolor CardRow">
                    <div className="CardPropLeft">Crew</div>
                    <div className="CardPropRight">{data.crew}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropSkincolor CardRow">
                    <div className="CardPropLeft">Passensgers</div>
                    <div className="CardPropRight">{data.passengers}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropEyecolor CardRow">
                    <div className="CardPropLeft">Consumables</div>
                    <div className="CardPropRight">{data.consumables}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropBirthyear CardRow">
                    <div className="CardPropLeft">Hyperdrive</div>
                    <div className="CardPropRight">{data.hyperdrive_rating}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropGender CardRow">
                    <div className="CardPropLeft">Class</div>
                    <div className="CardPropRight">{data.starship_class}</div>
                </div>
            </div>
        </div>
    );
}

export default CardSpaceship;