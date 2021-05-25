import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../img/chest.png';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import {StoreClickData} from './StoreData';

const useStyles = makeStyles(theme => ({
    ChestClicker_Chest:{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        width: '612px',
        height: '408px',
        cursor: 'pointer',
    }
}));

const ChestClicker = () => {
    const classes = useStyles();
    if(!window.localStorage.getItem('ClickCounter'))window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterDefault));
    const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
    const [clickerCounter,setClickerCounter] = React.useState(ClickCounter.count);
    const ClickKeeper = () => {
        const ClickCounter2 = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
        const number = ClickCounter2.count+(1*ClickCounter2.clickMultiplier);
        setClickerCounter(number);
        StoreClickData(number);
    }

    return(
       
        <div className={classes.ChestClicker_Chest} onClick={ClickKeeper}>
            <div>
                {ClickCounter.count}
            </div>
        </div>

    )
}

export default ChestClicker;