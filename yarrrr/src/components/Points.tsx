import { Button } from '@material-ui/core';
import React from 'react';
import ClickCounterDefault from '../defaults/DefaultClickCounter';
import {makeStyles} from '@material-ui/core/styles';
import { MilestoneDefault } from '../defaults/Milestones';
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

    const CheckAcheivementCondiditons = () =>{
        if(!window.localStorage.getItem('ClickCounter'))window.localStorage.setItem('ClickCounter',JSON.stringify(ClickCounterDefault));
        const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
        let Milestones = JSON.parse(window.localStorage.getItem('Milestones') || JSON.stringify(MilestoneDefault));
        if(ClickCounter.count>=10000){
            Milestones.Milestone[1]=1;
        }
        if(ClickCounter.count>=50000){
            Milestones.Milestone[2]=1;
        }
        if(
            ClickCounter.passiveClicker[1] >= 10 &&
            ClickCounter.passiveClicker[2] >= 10 &&
            ClickCounter.passiveClicker[3] >= 10 &&
            ClickCounter.passiveClicker[4] >= 10 &&
            ClickCounter.passiveClicker[5] >= 10 &&
            ClickCounter.passiveClicker[6] >= 10 &&
            ClickCounter.passiveClicker[7] >= 10
        ){
            Milestones.Milestone[3]=1;
        }
        else Milestones.Milestone[3]=0;
        if(ClickCounter.passiveClicker[1] >= 100){
            Milestones.Milestone[4]=1;
        }
        else Milestones.Milestone[4]=0;
        if(ClickCounter.count>=100000){
            Milestones.Milestone[5]=1;
        }
        if(
            ClickCounter.passiveClicker[1] >= 50 &&
            ClickCounter.passiveClicker[2] >= 50 &&
            ClickCounter.passiveClicker[3] >= 50 &&
            ClickCounter.passiveClicker[4] >= 50 &&
            ClickCounter.passiveClicker[5] >= 50 &&
            ClickCounter.passiveClicker[6] >= 50 &&
            ClickCounter.passiveClicker[7] >= 50
        ){
            Milestones.Milestone[6]=1;
        }
        else Milestones.Milestone[6]=0;
        if(ClickCounter.passiveClicker[7] >= 100){
            Milestones.Milestone[7]=1;
        }
        else Milestones.Milestone[7]=0;
        window.localStorage.setItem('Milestones',JSON.stringify(Milestones));
    }
  

const Points = () => {
    const classes = useStyles();
    
    const [points,setPoints] = React.useState(0);

    React.useEffect(() => {
        let interval = setInterval(() => {
            const ClickCounter = JSON.parse(window.localStorage.getItem('ClickCounter') || JSON.stringify(ClickCounterDefault));
            setPoints(ClickCounter.count);
            CheckAcheivementCondiditons();
        }, 100);
        return () => clearInterval(interval)
      },[]);
    return(
        <div className={classes.Points}>
            <Button className={classes.Button}>
                <h2>{points}</h2>
            </Button>
        </div>
    )
}
export default Points;