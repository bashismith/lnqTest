import React , { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState('');

  const padZero = (num) => {
    const strNum = num.toString();
    if(strNum.length >= 2) return num;
    return `0${num}`;
  };
  const timer = () => {
    const now = new Date().getTime();
    const then = new Date('December 21, 2021 18:26:00').getTime();
    const difference=(now-then);

    const daysLeft = padZero(Math.floor(difference/(60*60*1000*24)*1));
    const hrsLeft = padZero(Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1));
    const minsLeft = padZero(Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1));
    const secsLeft = padZero(Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1));



    setCount(`${daysLeft}:${hrsLeft}:${minsLeft}:${secsLeft}`)
  };
   useEffect (() => {
    timer();
    setInterval(() => timer(), 1000)
  },[]);

  return (
    <h2 className="count">{count}</h2>
  )
}

export default Timer;
