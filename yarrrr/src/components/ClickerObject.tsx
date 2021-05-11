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

const ChestClicker = () => {
    const classes = useStyles();

    const [clickerCounter,setClickerCounter] = React.useState(0);

    const ClickKeeper = () => {
        const number = clickerCounter;
        setClickerCounter(clickerCounter+1);
    }

    return(
        <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}></div>
    )
}

export default ChestClicker;