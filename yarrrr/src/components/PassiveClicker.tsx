import { Button, LinearProgress } from '@material-ui/core';
import React from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import StoreClickData from './StoreClickData';
import { makeStyles } from '@material-ui/core/styles';
import classes from '*.module.css';
interface PassiveClickerProps{
    value:number,
    time:number,
    ClickerNumber:number,
}
const useStyles = makeStyles({
  PassiveClicker:{
      height:'80px',
      
  },
  Button:{
    height:'50px',
    border:'1px solid black',
},
  });
  

const PassiveClicker:React.FC<PassiveClickerProps> = ({value, time, ClickerNumber}) => {
const classes = useStyles();
const [timer,setTimerState] = React.useState(0);
const [level,setLevel] = React.useState(0);
React.useEffect(() => {
    const AddNewNumber = () =>{
        const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
        var number = ClickCounter.count;
        const multiplier = ClickCounter.passiveClicker[ClickerNumber];
        setLevel(multiplier);
        number = number + (value * multiplier);
        StoreClickData(number);
    }
    let interval = setInterval(() => {
      if(timer>=time){
          setTimerState(0);
          AddNewNumber();
        }
      else if(level>0)setTimerState(timer+100)
    }, 100);
    return () => clearInterval(interval)
  }, [time,timer,value,level,ClickerNumber]);
return(
<div className={classes.PassiveClicker}>
    <Button className={classes.Button}>Level Up (Level = {level})</Button>
    <LinearProgress variant="determinate" value={timer/time * 100}/>
</div>
);
}

export default PassiveClicker;