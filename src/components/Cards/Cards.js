import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css"
import imgAdventure from "../../files/images/img-9.jpg"
import imgLuxury from "../../files/images/img-2.jpg"
import imgMystery from "../../files/images/img-3.jpg"
import imgSports from "../../files/images/img-4.jpg"
import imgAdrenaline from "../../files/images/img-8.jpg"

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src={imgAdventure}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem
                            src={imgLuxury}
                            text="Travel through the Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={imgMystery}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={imgSports}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Sports'
                            path='/products'
                        />
                        <CardItem
                            src={imgAdrenaline}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;