import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import StoreClickData from '../components/StoreClickData';
const useStyles = makeStyles({
    ChestClicker_Chest:{
        background: '../img/chest.png',
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
    }
});

const ChestClicker = () => {
    const classes = useStyles();
    if(!window.localStorage.getItem('ClickCounter'))window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterDefault));
    const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    const [clickerCounter,setClickerCounter] = React.useState(ClickCounter.count);
    const ClickKeeper = () => {
        const number = clickerCounter+(1*ClickCounter.clickMultiplier);
        setClickerCounter(number);
        StoreClickData(number);
    }

    return(
        <div>
            {clickerCounter}
            <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}><img width="200" height="200" src='../img/chest.png' alt="obrazek"/></div>
        </div>
    )
}

export default ChestClicker;