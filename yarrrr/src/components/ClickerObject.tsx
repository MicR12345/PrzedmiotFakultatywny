import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../img/chest.png';

const useStyles = makeStyles({
    ChestClicker_Chest:{
        backgroundSize: 'cover',
        width: '612px',
        height: '408px',
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
        <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}><img width="612" height="408" src={image}/></div>
    )
}

export default ChestClicker;