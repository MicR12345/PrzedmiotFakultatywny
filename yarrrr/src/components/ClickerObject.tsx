import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    ChestClicker_Chest:{
        background: `url('../img/chest.png')`,
        backgroundSize: 'cover',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
    }
});

const ClickCounterDefault = {
    count:0,
}

const ChestClicker = () => {
    const classes = useStyles();
    const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    const [clickerCounter,setClickerCounter] = React.useState(ClickCounter.count);

    const ClickKeeper = () => {
        const number = clickerCounter;
        setClickerCounter(clickerCounter+1);
        const ClickCounter = {
            count: clickerCounter,
        }
        window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounter));
    }

    return(
        <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}></div>
    )
}

export default ChestClicker;