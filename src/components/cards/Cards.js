import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards(){
    return(
        <div className="cards">
            <h1>You Can Choose Your Destination!</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem src="images/img-9.jpg" text="Here is Your Places to Choice" label='Adventure' path='/services'/>
                        <CardItem src="images/img-2.jpg" text="Here is Your Places to Choice" label="Luxury" path='/services'/>
                        <CardItem src="images/img-9.jpg" text="Here is Your Places to Choice" label='Adventure' path='/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;