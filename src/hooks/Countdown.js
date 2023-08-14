import React from 'react'

const Countdown = ({ hours = 0, minutes = 0, seconds = 0 }) => {
    const [paused, setPaused] = React.useState(true);
    const [over, setOver] = React.useState(false);
    const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);
  
    const tick = () => {
      if (paused || over) return;
      if (h === 0 && m === 0 && s === 0) setOver(true);
      else if (m === 0 && s === 0) {
        setTime([h - 1, 59, 59]);
      } else if (s == 0) {
        setTime([h, m - 1, 59]);
      } else {
        setTime([h, m, s - 1]);
      }
    };
  
    const reset = () => {
      setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
      setPaused(false);
      setOver(false);
    };
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <div>
        <p className='time__display'>{`${s.toString().padStart(2, '0')}`}</p>
        <div className='times__up'>{over ? "Rest" : ''}</div>
        <button className='time__buttons' onClick={() => setPaused(!paused)}>
          {paused ? 'Start' : 'Pause'}
        </button>
        <button className='time__buttons' onClick={() => reset()}>Restart</button>
      </div>
    );
  };

  export {Countdown}