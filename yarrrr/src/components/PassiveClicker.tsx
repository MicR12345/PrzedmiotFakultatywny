import { LinearProgress } from '@material-ui/core';
import React from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import StoreClickData from './StoreClickData';
import { useEffect } from 'react';
interface PassiveClickerProps{
    value:number,
    time:number,
}
const PassiveClicker:React.FC<PassiveClickerProps> = ({value, time}) => {
const [timer,setTimerState] = React.useState(0);
useEffect(() => {
    const AddNewNumber = () =>{
        const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
        var number = ClickCounter.count;
        const multiplier = ClickCounter.passiveClicker1;
        number = number + (value * multiplier);
        StoreClickData(number);
    }
    setInterval(() => {
      if(timer>=time)setTimerState(0);
      else setTimerState(timer+10)
      AddNewNumber();
    }, 100);
  }, [time,timer,value]);
return(
<div>
    <LinearProgress value={timer}/>
</div>
);
}

export default PassiveClicker;