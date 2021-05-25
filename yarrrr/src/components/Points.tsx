import { Button } from '@material-ui/core';
import React from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    Points:{
        display:'flex',
        justifyContent:'center',
        alignItems:'baseline'
    },
    Button:{
      display:'flex',
      height:'50px',
      border:'1px solid black',
      background:'gray',
  },
    });

const Points = () => {
    const classes = useStyles();
    
    const [points,setPoints] = React.useState(0);

    React.useEffect(() => {
        let interval = setInterval(() => {
            const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
            setPoints(ClickCounter.count);
        }, 1000);
        return () => clearInterval(interval)
      },[]);
    return(
        <div className={classes.Points}>
            <Button className={classes.Button}>
                {points}
            </Button>
        </div>
    )
}
export default Points;