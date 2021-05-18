import { LinearProgress } from '@material-ui/core';
import React, { useState } from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import StoreClickData from './StoreClickData';
import { useEffect } from 'react';
interface PassiveClickerProps{
    value:number,
    time:number,
}
const PassiveClicker:React.FC<PassiveClickerProps> = ({value, time}) => {
const [timer,setTimerState] = React.useState(0);
React.useEffect(() => {
    const AddNewNumber = () =>{
        const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
        var number = ClickCounter.count;
        const multiplier = ClickCounter.passiveClicker1;
        number = number + (value * multiplier);
        StoreClickData(number);
    }
    setInterval(() => {
      if(timer>=time){
          setTimerState(0);
          AddNewNumber();
        }
      else setTimerState(timer+100)
      return clearTimeout();
    }, 100);
  }, [time,timer,value]);
return(
<div>
    {timer}
    <LinearProgress variant="determinate" value={timer/time * 100}/>
</div>
);
}

export default PassiveClicker;