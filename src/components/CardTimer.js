import React from 'react';
import { Countdown } from '../hooks/Countdown';

export default function CardTimer() {

  return (
    <li className='cards__item'>
      <div className='cards__timer__info'>
        <div className='timer__wrapper'>
          <h1>Countdown Timer</h1>
          <Countdown seconds={30} />
        </div>
      </div>
    </li>
  );
}
