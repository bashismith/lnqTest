import React , { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState('');

  const padZero = (num) => {
    const strNum = num.toString();
    if(strNum.length >= 2) return num;
    return `0${num}`;
  };
  const timer = () => {
    const releaseDate = new Date('January 21, 2022 12:22:12').getTime();
    const now = new Date().getTime();
    const diff = releaseDate - now;

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const daysLeft = padZero(Math.floor(diff / day));
    const hrsLeft = padZero(Math.floor((diff % day) / hour));
    const minsLeft = padZero(Math.floor((diff % hour) / min));
    const secsLeft = padZero(Math.floor((diff % min) / sec));

    setCount(`${daysLeft}:${hrsLeft}:${minsLeft}:${secsLeft}`)
  };
   useEffect (() => {
    timer();
    setInterval(() => timer(), 1000)
  },[]);

  return (
    <h2 className="count">{count >= '00:00:00:00' ? count : '00:00:00:00'}</h2>
  )
}

export default Timer;
