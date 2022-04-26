import React, {useState} from "react";
import ReactDOM from 'react-dom/client';
// @ts-ignore
import ButtonDefaultShavedLeft from './buttons/ButtonDefaultShavedLeft.tsx';
// @ts-ignore
import ButtonDefaultShavedRight from './buttons/ButtonDefaultShavedRight.tsx';
// @ts-ignore
import CardPerson from './cards/CardPerson.tsx';
// @ts-ignore
import CardPlanet from './cards/CardPlanet.tsx';
// @ts-ignore
import CardSpaceship from './cards/CardSpaceship.tsx';
// @ts-ignore
import {globalData} from './../scripts.ts';

interface SearchBarProps {
    placeholder: string,
    inputWidth: string,
    buttonSearchName: string,
    buttonRandomName: string,
}

function SearchBar ({placeholder, inputWidth, buttonSearchName, buttonRandomName}: SearchBarProps) {

    //--------------- functions for random event below
    // ** примечание 2 **
    const [cardList, setCardList] = useState([]);

    const returnRandomData = (typeOfData, quantityIndex) => {
        function searchForRandomData() {
            let addressIndex = Math.floor(Math.random() * quantityIndex + 1)
            const httpRequest = `https://swapi.dev/api/${typeOfData}/${addressIndex}/`;
            return fetch(httpRequest, {headers: {'Accept': 'application/json'}})
            .then((response) => {
                if (!response.ok) {
                    return searchForRandomData();
                }
                return response.json();
            })
            .then((response) => {
                return response
            }) 
        }  
        return searchForRandomData();
    };

    const mountRandomCard = () => {
        let typeOfData, quantityIndex;
        let typeIndex = Math.floor(Math.random() * 3 + 1);
        if (typeIndex === 1) {
            typeOfData = 'people';
            quantityIndex = 83;
        }
        if (typeIndex === 2) {
            typeOfData = 'planets';
            quantityIndex = 60;
        }
        if (typeIndex === 3) {
            typeOfData = 'starships';
            quantityIndex = 17;
        }

        returnRandomData(typeOfData, quantityIndex).then((response) => {
            let card
            if (typeIndex === 1) {
                card = React.createElement('div', {className: ''}, <CardPerson {...response} key={globalData.numOfCards}/>);
            }
            if (typeIndex === 2) {
                card = React.createElement('div', {className: ''}, <CardPlanet {...response} key={globalData.numOfCards}/>);
            }
            if (typeIndex === 3) {
                card = React.createElement('div', {className: ''}, <CardSpaceship {...response} key={globalData.numOfCards}/>);
            }
            const CardsCont = ReactDOM.createRoot(document.getElementById('CardsCont'));
            CardsCont.render(<div>{cardList}</div>);
            // @ts-ignore
            // ** примечание 5 **
            setCardList(cardList = cardList.unshift(card));
            // console.log('new card is rendered!')
            globalData.numOfCards++
            console.log('numOfCards now is: ' + globalData.numOfCards)
        })     
    }

    //--------------- functions for search event below

    let cardFlag = 'person';

    const returnSearchedData = (inputText) => {
        let addressIndex = 1;

        function searchForPerson() {
            const httpRequest = `https://swapi.dev/api/people/${addressIndex}/`;
            return fetch(httpRequest, {headers: {'Accept': 'application/json'}})
            .then((response) => {
                if (!response.ok && addressIndex <= 83) {
                    addressIndex++;
                    return searchForPerson();
                } else if (!response.ok && addressIndex >=83) {
                    addressIndex = 1;
                    cardFlag = 'planet'
                    return searchForPlanet();
                }
                return response.json();
            })
            .then((response) => {
                if (response.name.toLowerCase() === inputText.toLowerCase()) {
                    return response;
                }
                else if (addressIndex <= 83) {
                    addressIndex++;
                    // console.log('not found in people, looking further...')
                    return searchForPerson();
                } else {
                    // console.log('not found!')
                    return {name: 'data not found!'}
                }
            }) 
        }

        function searchForPlanet() {
            const httpRequest = `https://swapi.dev/api/planets/${addressIndex}/`;
            return fetch(httpRequest, {headers: {'Accept': 'application/json'}})
            .then((response) => {
                if (!response.ok && addressIndex <= 60) {
                    addressIndex++;
                    return searchForPlanet();
                } else if (!response.ok && addressIndex >= 60) {
                    addressIndex = 1;
                    cardFlag = 'spaceship'
                    return searchForSpaceship();
                }
                return response.json();
            })
            .then((response) => {
                if (response.name.toLowerCase() === inputText.toLowerCase()) {
                    return response;
                }
                else if (addressIndex <= 60) {
                    addressIndex++;
                    // console.log('not found in planets, looking further...')
                    return searchForPlanet();
                } else {
                    // console.log('not found!')
                    return {name: 'data not found!'}
                }
            }) 
        }

        function searchForSpaceship() {
            const httpRequest = `https://swapi.dev/api/starships/${addressIndex}/`;
            return fetch(httpRequest, {headers: {'Accept': 'application/json'}})
            .then((response) => {
                if (!response.ok && addressIndex <= 17) {
                    addressIndex++;
                    return searchForSpaceship();
                } else if (!response.ok && addressIndex >= 17) {
                    return {name: 'data not found!'}
                }
                return response.json();
            })
            .then((response) => {
                if (response.name.toLowerCase() === inputText.toLowerCase()) {
                    return response;
                }
                else if (addressIndex <= 17) {
                    addressIndex++;
                    // console.log('not found in spaceships, looking further...')
                    return searchForSpaceship();
                } else {
                    // console.log('no such data in database!')
                    return {name: 'data not found!'};
                }
            }) 
        }
        return searchForPerson();
    };

    const mountSearchedCard = () => {
        let card;
        // @ts-ignore
        const inputText = document.querySelector('#SearchBarMain').value;
        returnSearchedData(inputText).then((response) => {
            if (cardFlag === 'person') {
                card = React.createElement('div', {className: ''}, <CardPerson {...response} key={globalData.numOfCards}/>);
            } else if (cardFlag === 'planet') {
                card = React.createElement('div', {className: ''}, <CardPlanet {...response} key={globalData.numOfCards}/>);
            } else {
                card = React.createElement('div', {className: ''}, <CardSpaceship {...response} key={globalData.numOfCards}/>);
            }
            
            const CardsCont = ReactDOM.createRoot(document.getElementById('CardsCont'));
            CardsCont.render(<div>{cardList}</div>);
            // @ts-ignore
            setCardList(cardList = cardList.unshift(card));
            // console.log('rendered!')
            globalData.numOfCards++
            console.log('numOfCards now is: ' + globalData.numOfCards)
        })

    }

    function inputDebounce() {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(mountSearchedCard, 2500);
        }
    }

    //--------------- component render below

    return (
        <div className="SearchBarCont">
            <div onClick={mountRandomCard}>
                <ButtonDefaultShavedLeft buttonName={buttonRandomName} />
            </div>
            <input id="SearchBarMain" className="SearchBarInput" type='text' placeholder={placeholder} style={{width: inputWidth}} onChange={inputDebounce()} />
            <div onClick={mountSearchedCard}>
                <ButtonDefaultShavedRight buttonName={buttonSearchName} />
            </div>
        </div>
    );
}

export default SearchBar;