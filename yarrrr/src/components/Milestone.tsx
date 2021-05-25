import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {MilestoneDefault} from '../defaults/Milestones';

const useStyles = makeStyles({
    Milestone:{
      display:'flex',
      height:'50px',
      width:'200px',
      border:'1px solid black',
      background:'gray',
  },
  Text:{
    display:'flex',
  },
    });

const Milestone = () => {
    const classes = useStyles();
    const Milestone = JSON.parse(window.localStorage.getItem('Milestones') || JSON.stringify(MilestoneDefault));
    return (
        <div className={classes.Milestone}>
            Milestone TODO {Milestone.milestone[1]}
        </div>
    )
}
export default Milestone;