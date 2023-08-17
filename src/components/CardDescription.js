import React from 'react'
import { Link } from 'react-router-dom'
import {UseFetch} from '../hooks/UseFetch'

function CardDescription(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='description__container'>
          <h1 className='description__title'>Placeholder</h1>
          <p className='description__body'><UseFetch /></p>
        </div>
      </li>
    </>
  )
}

export default CardDescription