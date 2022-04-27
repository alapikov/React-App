import React, {useState, useEffect} from "react";
// @ts-ignore
import {globalData} from './../../scripts.ts';
// @ts-ignore
import useEffectOnFirstRender from './../../customHooks/useEffectOnFirstRender.tsx'

interface CardPersonProps {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
}


function CardPerson(data: CardPersonProps) {

    let [classList, setClassList] = useState('CardCont CardAnimateMount');
    useEffectOnFirstRender(() => {
        setClassList(classList = 'CardCont');
        globalData.numOfCards++;
        document.title = ` ${globalData.numOfCards} cards now!`;
    }, [])

    const [cardList, setCardList] = useState([]);

    // ** примечание 3 **
    return (
        <div className={classList}>
            
            <div className="CardPropsCont">
                <div className="CardTitle">{data.name}
                <img className="CardButtonClose" src='./images/buttonClose.svg' />
                </div>
                <div className="CardLabel">person</div>
                <div className="CardPropHeight CardRow">
                    <div className="CardPropLeft">Height</div>
                    <div className="CardPropRight">{data.height}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropMass CardRow">
                    <div className="CardPropLeft">Mass</div>
                    <div className="CardPropRight">{data.mass}</div> 
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropHaircolor CardRow">
                    <div className="CardPropLeft">Hair color</div>
                    <div className="CardPropRight">{data.hair_color}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropSkincolor CardRow">
                    <div className="CardPropLeft">Skin color</div>
                    <div className="CardPropRight">{data.skin_color}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropEyecolor CardRow">
                    <div className="CardPropLeft">Eye color</div>
                    <div className="CardPropRight">{data.eye_color}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropBirthyear CardRow">
                    <div className="CardPropLeft">Birth year</div>
                    <div className="CardPropRight">{data.birth_year}</div>
                </div>
                <div className="CardSplitLine"></div>
                <div className="CardPropGender CardRow">
                    <div className="CardPropLeft">Gender</div>
                    <div className="CardPropRight">{data.gender}</div>
                </div>
            </div>
        </div>
    );
}

export default CardPerson;