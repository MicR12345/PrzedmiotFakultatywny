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
      background:'#badadb',
  },
  Buttons:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'baseline'
    
  },
  Button:{
    display:'flex',
    height:'50px',
    border:'1px solid black',
    background:'gray',
},
Text:{
  display:'flex',
},
  });
  

const PassiveClicker:React.FC<PassiveClickerProps> = ({value, time, ClickerNumber}) => {
const ClickCounter2 = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
const classes = useStyles();
const [timer,setTimerState] = React.useState(0);
const [level,setLevel] = React.useState(ClickCounter2.passiveClicker[ClickerNumber]);
const cost = (value * level * level) + (50 * value);
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
  const LevelUp = () => {
    const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    if(ClickCounter.count>=cost){
    let multipliers = ClickCounter.passiveClicker;
    multipliers[ClickerNumber] ++;
    setLevel(level+1);
    StoreClickData(ClickCounter.count-(cost),ClickCounter.clickMultiplier,multipliers);
    }
  }
return(
<div className={classes.PassiveClicker}>
  <div className={classes.Buttons}>
    <Button className={classes.Button} onClick={LevelUp}>Level Up (Level = {level}) Cost = {cost}</Button>
    <div className={classes.Text}>Generating {value * level} points</div>
  </div>
    <LinearProgress variant="determinate" value={timer/time * 100}/>
</div>
);
}

export default PassiveClicker;