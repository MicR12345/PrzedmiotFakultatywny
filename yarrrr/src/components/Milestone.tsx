import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {MilestoneDefault} from '../defaults/Milestones';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    Milestone:{
      display:'flex',
      height:'auto',
      width:'15%',
      border:'1px solid black',
      background:'gray',
      flexWrap:'wrap',
      justifyContent:'space-around',
      alignItems:'baseline',
  },
  Text:{
    display:'flex',
    height:'25px',
  },
    });

interface MilestoneProps{
    milestoneNumber:number,
    name:string,
    description?:string,
}

const Milestone:React.FC<MilestoneProps> = ({milestoneNumber,name,description}) => {
    const classes = useStyles();
    if(!window.localStorage.getItem('Milestones'))window.localStorage.setItem('Milestones',JSON.stringify(MilestoneDefault));
    const Milestone = JSON.parse(window.localStorage.getItem('Milestones') || JSON.stringify(MilestoneDefault));
    if(!description){
        if(Milestone.Milestone[milestoneNumber]==1){
            return (
                <div className={classes.Milestone}>
                <div className={classes.Text}>
                {milestoneNumber}. {name}
                <Checkbox disabled checked inputProps={{ 'aria-label': 'milestone checkbox' }} />
                </div>
                </div>
            )
        }
        else{
            return (
                <div className={classes.Milestone}>
                <div className={classes.Text}>
                {milestoneNumber}. {name}
                <Checkbox disabled inputProps={{ 'aria-label': 'milestone checkbox' }} />
                </div>
                </div>
            )
        }
    }
    else{
        if(Milestone.Milestone[milestoneNumber]==1){
        return (
            <div className={classes.Milestone}>
                <div className={classes.Text}>
                {milestoneNumber}. {name}
                <Checkbox disabled checked inputProps={{ 'aria-label': 'milestone checkbox' }} />
                </div>
                <div>
                {description}
                </div>
            </div>
        )
        }
        else{
            return (
                <div className={classes.Milestone}>
                <div className={classes.Text}>
                {milestoneNumber}. {name}
                <Checkbox disabled inputProps={{ 'aria-label': 'milestone checkbox' }} />
                </div>
                <div>
                {description}
                </div>
            </div>
            )
        }
    }

}
export default Milestone;