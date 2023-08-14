import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import CardTimer from './CardTimer'
import CardDescription from './CardDescription'
import CardSelection from './CardSelection'

function Cards() {
  return (
    <div className='cards'>
      <h1>Choose your stretch!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
                <CardSelection />
            </ul>
            <ul className='cards__items'>
                <CardItem
                src="images/img-9.jpg"
                // text="Explore the hidden waterfall deep inside the Amazon Jungle"
                // label='Adventure'
                // path='/services'
                />
            </ul>
            <ul className='cards__items'>
            <CardDescription />
            <CardTimer />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
