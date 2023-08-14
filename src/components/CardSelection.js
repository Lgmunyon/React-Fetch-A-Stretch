import React from 'react'
import { Link } from 'react-router-dom'

function CardSelection(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='selection__container'>
            <ul className='selection__wrapper'>
                <a className='selection__anchors'>Neck</a>
                <a className='selection__anchors'>Shoulders</a>
                <a className='selection__anchors'>Back</a>
                <a className='selection__anchors'>Hands</a>
                <a className='selection__anchors'>Hips</a>
                <a className='selection__anchors'>Legs</a>
            </ul>
        </div>
      </li>
    </>
  )
}

export default CardSelection