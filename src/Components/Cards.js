import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Artists list</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="./images/keinemusik.jpg"
                            text='Keinemusik is a network with the label as the pulse pumping centre. Driven particularly by the spirit that moves the collective behind the imprint.'
                            label='Keinemusik'
                            path='/services'
                        />
                        <CardItem
                            src='images/blackcoffee.jpg'
                            text='Considering his meteoric rise to fame, it would be easy to stereotype Black Coffee as just another black diamond, a BEE beat magnet out to mine the insatiable upwardly mobile urban house party market.
                            Influenced by melodic trends in electronic music he combined the roots of Techno in a very creative way, and came up with his unique and abstract sound.'
                            label='Black Coffee'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/innellea.webp'
                            text='Influenced by melodic trends in electronic music he combined the roots of Techno in a very creative way, and came up with his unique and abstract sound.'
                            label='Innellea'
                            path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;