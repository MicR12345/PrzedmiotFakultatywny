import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ChestClicker_Chest:{
        background: '../img/chest.png',
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
    }
});

const ClickCounterDefault = {
    count:0,
    clickMultiplier:1,
}

const ChestClicker = () => {
    const classes = useStyles();
    const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    const [clickerCounter,setClickerCounter] = React.useState(ClickCounter.count);

    const ClickKeeper = () => {
        const number = (clickerCounter+1)*ClickCounter.clickMultiplier;
        setClickerCounter(number);
        const ClickCounterNew = {
            count: number,
            clickMultiplier:1,
        }
        window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterNew));
    }

    return(
        <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}><img width="200" height="200" src='../img/chest.png'/></div>
    )
}

export default ChestClicker;